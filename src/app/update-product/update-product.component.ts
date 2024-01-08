import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent implements OnInit {
  id!: number;
  urlImg: String = '/assets/images/Update-pana.png';

  constructor(
    private _product_service: ProductService,
    private _router: ActivatedRoute,
    private _router_navig: Router
  ) {}
  ngOnInit(): void {
    this.id = +this._router.snapshot.paramMap.get('idproduit')!;
    this.getProductToUpdate(this.id);
  }
  UpdateForm = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.pattern('^[0-9]+$')),
    description: new FormControl('', Validators.minLength(10)),
  });

  getProductToUpdate(id: number) {
    this._product_service.getProduitbyid(id).subscribe({
      next: (data: any) => {
        this.UpdateForm.patchValue(data);
        // this.UpdateForm.setValue({
        //   name: data.name,
        //   price: data.price,
        //   description: data.description,
        // });
      },
      error: (error) => {
        console.log(`Error : ${error}`);
      },
    });
  }

  updateProduct() {
    if (this.UpdateForm.valid) {
      this._product_service
        .updateProduct(this.UpdateForm.value, this.id)
        .subscribe({
          next: () => {
            alert('Le produit a bien été modifié');
            this._router_navig.navigate(['home']);
          },
          error: (error) => {
            alert('somthing was warning');
          },
        });
    } else {
      alert('invalid data');
    }
  }
}
