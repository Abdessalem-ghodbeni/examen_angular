import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-detail-component',
  templateUrl: './detail-component.component.html',
  styleUrls: ['./detail-component.component.css'],
})
export class DetailComponentComponent implements OnInit {
  idProduct!: number;
  produit!: any;
  origineRecevoire!: String;
  constructor(
    private _router: ActivatedRoute,
    private _produit_service: ProductService
  ) {}
  ngOnInit(): void {
    // this._router.params.subscribe((param) => {
    //   this.idProduct = +param['id'];
    // });
    this.idProduct = +this._router.snapshot.paramMap.get('id')!;

    this.getProduitById();
  }

  recevoireOrigine(data: String) {
    this.origineRecevoire = data;
  }

  getProduitById() {
    this._produit_service.getProduitbyid(this.idProduct).subscribe({
      next: (value) => {
        this.produit = value;
      },
      error: (error) => {
        console.log('erreur', error);
      },
    });
  }
}
