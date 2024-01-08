import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-show-shoping-component',
  templateUrl: './show-shoping-component.component.html',
  styleUrls: ['./show-shoping-component.component.css'],
})
export class ShowShopingComponentComponent implements OnInit {
  listeProductChart: any[] = [];
  searchText: string = '';
  constructor(private _product_service: ProductService) {}
  ngOnInit(): void {
    this.getAllProduitsFromChart();
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
}
