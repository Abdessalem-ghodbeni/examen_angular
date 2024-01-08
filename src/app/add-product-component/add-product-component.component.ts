import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-product-component',
  templateUrl: './add-product-component.component.html',
  styleUrls: ['./add-product-component.component.css'],
})
export class AddProductComponentComponent implements OnInit {
  @ViewChild('addProductFomrs') addProductFomrs!: NgForm;
  product = {
    name: '',
    price: '',
    description: '',
  };

  constructor(private _product_service: ProductService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  //methode 1
  // ajouterProduit(addProductFomrs: NgForm) {
  //   if (addProductFomrs.valid) {
  //     this._product_service.addProduct(this.product).subscribe({
  //       next: (data) => {
  //         alert('Product Succefully added');
  //       },
  //       error: (error) => {
  //         alert(error);
  //       },
  //     });
  //   }
  // }

  //methode 2
  ajouterProduit() {
    if (this.addProductFomrs.valid) {
      this._product_service.addProduct(this.product).subscribe({
        next: () => {
          alert('Product Succefully added');
          this.addProductFomrs.reset();
        },
        error: (error) => {
          alert(error);
        },
      });
    }
  }
}
