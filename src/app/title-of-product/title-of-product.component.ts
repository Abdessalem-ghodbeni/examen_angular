import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-title-of-product',
  templateUrl: './title-of-product.component.html',
  styleUrls: ['./title-of-product.component.css'],
})
export class TitleOfProductComponent {
  @Input() inputData!: String;

  @Output() e = new EventEmitter();
  origine!: String;

  Oringine: String[] = [
    'Abdessalem',
    'Ghodbeny',
    'Twin_7',
    'esprit',
    'actia',
    'angular',
  ];
  chargerOrigine() {
    const index_oringine = Math.floor(Math.random() * this.Oringine.length);
    this.origine = this.Oringine[index_oringine];
    console.log(this.origine);
    this.e.emit(this.origine);
  }
}
