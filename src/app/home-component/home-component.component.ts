import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
})
export class HomeComponentComponent implements OnInit {
  listeProduct: any[] = [];
  listeProductChart: any[] = [];
  searchText: string = '';
  constructor(
    private _product_service: ProductService,
    private _router: Router
  ) {}
  //methode 1 de recuperation navigation
  // getByID(id: number) {
  //   this._router.navigate(['datails', id]);
  // }

  sendId(id: number) {
    this._router.navigate(['update/', id]);
  }

  ngOnInit(): void {
    this.getAllProduits();
    this.getAllProduitsFromChart();
  }
  getAllProduits() {
    this._product_service.getAllProduct().subscribe({
      next: (data: any) => {
        this.listeProduct = data;
      },
      error: () => {
        alert('Erreur de chargement des produits');
      },
    });
  }
  getAllProduitsFromChart() {
    this._product_service.getAllProductPanier().subscribe({
      next: (data: any) => {
        this.listeProductChart = data;
      },
      error: () => {
        alert('Erreur de chargement des produits');
      },
    });
  }

  achter(product: any) {
    if (this.listeProductChart.includes(product)) {
      alert('Product already exists');
    } else {
      this._product_service.addToPanier(product).subscribe({
        next: (data) => {
          alert('Product Successfully added to panier');
        },
        error: (error) => {
          console.log('Error:', error);
          alert('An error occurred while adding the product to the cart');
        },
      });
    }
  }

  //methode 2 avec indexOf
  // achter(product: any) {
  //   if (this.listeProductChart.indexOf(product) != -1) {
  //     alert('Product already exists');
  //   } else {
  //     this._product_service.addToPanier(product).subscribe({
  //       next: (data) => {
  //         alert('Product Successfully added to panier');
  //       },
  //       error: (error) => {
  //         console.log('Error:', error);
  //         alert('An error occurred while adding the product to the cart');
  //       },
  //     });
  //   }
  // }

  delte(id: number) {
    this._product_service.delete(id).subscribe({
      next: () => {
        alert('Product is deleted');
        this.getAllProduits();
      },
      error: () => {
        alert('something was warrning');
      },
    });
  }
}
