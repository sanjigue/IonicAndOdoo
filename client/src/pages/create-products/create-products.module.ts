import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateProductPage } from './create-products';

@NgModule({
  declarations: [
    CreateProductPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateProductPage),
  ],
})
export class CreateProductPageModule {
}
