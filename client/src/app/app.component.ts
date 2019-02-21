import { Component } from '@angular/core';
import { Platform, MenuController  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { ListPage } from '../pages/list/list';
 //import { SettingsAdminPage } from '../pages/settings-admin/settings-admin';
import { HomePage } from '../pages/home/home';
//import { CreateProductPage } from '../pages/create-products/create-products';
// import { UpdateUsersPage } from '../pages/update-users/update-users';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menuCtrl: MenuController) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
 
  closeMenu() {
    this.menuCtrl.close();
  }
 
  toggleMenu() {
    this.menuCtrl.toggle();
  }
}

