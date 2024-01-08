import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AddProductComponentComponent } from './add-product-component/add-product-component.component';
import { ShowShopingComponentComponent } from './show-shoping-component/show-shoping-component.component';
import { DetailComponentComponent } from './detail-component/detail-component.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponentComponent },
  { path: 'add', component: AddProductComponentComponent },
  { path: 'shopingCart', component: ShowShopingComponentComponent },
  { path: 'datails/:id', component: DetailComponentComponent },
  { path: 'update/:idproduit', component: UpdateProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
