import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IonicService } from '../../providers/ionic-service';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { SettingsAdminPage } from '../../pages/settings-admin/settings-admin';

@IonicPage()
@Component({

  selector: 'page-create-products',
  templateUrl: 'create-products.html',
})
export class CreateProductPage {
  newProduct: any = { name: "" ,list_pice:"", description: ""}
  nameProduct: String;
  priceProduct: number;
  description: String;

  formgroup: FormGroup;
  name: AbstractControl;
  price: AbstractControl;
  descrip: AbstractControl;
  constructor(public navCtrl: NavController, public navParams: NavParams, public ionicService: IonicService, public formbuilder:FormBuilder) {

    this.formgroup = formbuilder.group({
      name:['', Validators.required],
      price:['', Validators.required],
      descrip:['', Validators.required]
    });

    this.name = this.formgroup.controls['name'];
    this.price = this.formgroup.controls['price'];
    this.descrip = this.formgroup.controls['descrip'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateUsersPage');
  }
  goSettings(){
    console.log("llego al pa tras");
    this.navCtrl.push(SettingsAdminPage);
  }
  CreateProduct() {
    console.log("llego al botton create product");
    this.newProduct = { name: this.nameProduct, list_pice: this.priceProduct, description: this.description };
    this.addProduct(this.newProduct);
  }
  addProduct(newProduct) {
    console.log("llego al metodo de post product");
    this.ionicService.addProduct(newProduct).subscribe(() => {
      console.log("funcionó");
    }, error => {
      console.log(error);
    });
  }
}
