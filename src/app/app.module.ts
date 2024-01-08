import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponentComponent } from './add-product-component/add-product-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ShowShopingComponentComponent } from './show-shoping-component/show-shoping-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponentComponent } from './detail-component/detail-component.component';
import { TitleOfProductComponent } from './title-of-product/title-of-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponentComponent,
    HomeComponentComponent,
    ShowShopingComponentComponent,
    DetailComponentComponent,
    TitleOfProductComponent,
    UpdateProductComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
