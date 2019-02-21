import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingsAdminPage } from '../settings-admin/settings-admin';
import{IonicService}from '../../providers/ionic-service';
import { HomePage } from '../../pages/home/home';
@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
// private listImages: any;
products: Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public ionicService: IonicService) {
    
  }

  ionViewDidLoad() {
    this.getProducts();
  }

  //drawNaviganation
  onClikSettings(){
    this.navCtrl.push(SettingsAdminPage);
  }
  goHome(){
    this.navCtrl.push(HomePage);
   }
  //product
  //get 
  getProducts() {
    this.ionicService.findAllProducts().subscribe(usersArray => {
      this.products = usersArray;
      //console.log
    })
  } 
  //SQlite 
  GetAllImages(){
    this.ionicService.GetAllImages().then((data: any) => {
      console.log(data);
     // this.listImages = data;
    }, (error) => {
      console.log(error);
    })
  }
}
