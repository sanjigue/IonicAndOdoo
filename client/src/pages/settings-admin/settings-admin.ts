import { Component } from '@angular/core';
import { ToastController,NavController, NavParams, LoadingController } from 'ionic-angular';
import { IonicService } from '../../providers/ionic-service';
import { CreateProductPage } from '../../pages/create-products/create-products';
// import { SettingsAdminPage } from '../../pages/settings-admin/settings-admin';
// import { UpdateUsersPage } from '../../pages/update-users/update-users';
import { ListPage } from '../../pages/list/list';
@Component({
  selector: 'page-settings-admin',
  templateUrl: 'settings-admin.html'
})

export class SettingsAdminPage {
  users: Array<any>;
  products: Array<any>;
  companys: Array<any>;
  
  constructor(public navCtrl: NavController, public ionicService: IonicService, public navParams: NavParams,
    public loadingController: LoadingController, private toastCtrl: ToastController) {

  }

  ionViewDidLoad() {
    console.log("llego al view de settings");
    
    this.getUsers();
    this.getProducts();
    this.getCompany();
  }

  goList(){
    this.navCtrl.push(ListPage);
  }
  //users
  //Get
  getUsers() {
    this.ionicService.findAllUsers().subscribe(usersArray => {
      this.users = usersArray;
    }, error => {
      console.log( error);
      this.presentToast();
    });
  }
  //Delete
  informationDeleteUser(idUser) {
    console.log("llego al infotmation");
    console.log("no llega o qué" + idUser);
    this.deleteOne(idUser);
    this.presentLoadingDefault();
    this.navCtrl.push(SettingsAdminPage);

  }

  deleteOne(idDelete) {
    console.log("llego al delete");
    this.ionicService.removeOneUser(idDelete).subscribe(() => {
      console.log("funcionó");
    }, error => {
      console.log("efrenecito" + error);
    })
  }
  //Create
  showUsers() {
    for (var i = 0; i < this.users.length; i++) {
      console.log(this.users[i].id);
    }
  }
  //Update faltar terminar el update.
  updateUser(user) {
    console.log("LLEGOOO ME CAGO EN DIOS");
    console.log("no llega o qué" + user);
    //this.navCtrl.push(UpdateUsersPage, {user: user,"parentPage":this});
  }

  //product
  //Get
  getProducts() {
    this.ionicService.findAllProducts().subscribe(productArray => {
      this.products = productArray;
    },error => {
      console.log( error);
      this.presentToast();
    });
  }
  //Delete
  informationDeleteProduct(idProduct) {
    console.log("llego al boton ")
    this.deleteOneProduct(idProduct);
    this.presentLoadingDefault();
    this.navCtrl.push(SettingsAdminPage);
  }

  deleteOneProduct(idDelete) {
    console.log("llego al delete");
    this.ionicService.removeOneProduct(idDelete).subscribe(() => {
      console.log("funcionó");
    }, error => {
      console.log("efrenecito" + error);
    })
  }
  //Create Settings
  CreateProduct() {
    console.log("llego al botton de los cojones");
    this.navCtrl.push(CreateProductPage);
  }
  //Company
  //GET
  getCompany() {
    this.ionicService.findAllCompany().subscribe(comapnysArray => {
      this.companys = comapnysArray;
    },error => {
      console.log( error);
      this.presentToast();
    });
  }

  //Delete
  informationDeleteCompany(idCampny) {
    console.log("llego al boton de company")
    this.deleteOnePCompany(idCampny);
    this.presentLoadingDefault();
    this.navCtrl.push(SettingsAdminPage);
  }

  deleteOnePCompany(idDelete) {
    console.log("llego al delete");
    this.ionicService.removeOneCompany(idDelete).subscribe(() => {
      console.log("funcionó");
    }, error => {
      console.log("efrenecito" + error);
    });
  }

  //loading
  presentLoadingDefault() {
    let deleteLoading = this.loadingController.create({
      content: 'Borrando datos'
    });
  
    deleteLoading.present();
  
    setTimeout(() => {
      deleteLoading.dismiss();
    }, 3000);
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'No hay conexión',
      duration: 5000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}

