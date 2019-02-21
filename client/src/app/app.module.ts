import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {SQLite} from '@ionic-native/sqlite';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { SettingsAdminPage } from '../pages/settings-admin/settings-admin';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { IonicService } from '../providers/ionic-service';
import { HttpClientModule } from '@angular/common/http';
import { CreateProductPage } from '../pages/create-products/create-products';
import { UpdateUsersPage } from '../pages/update-users/update-users';


import { OdooJsonRpc } from "../services/odoojsonrpc";
import { Utils } from "../services/utils";
import { HttpModule } from "@angular/http";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SettingsAdminPage,
    CreateProductPage,
    UpdateUsersPage,
    SignUpPage
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SettingsAdminPage,
    CreateProductPage,
    UpdateUsersPage,
    SignUpPage
    
  ],
  providers: [
    OdooJsonRpc,
    Utils,
    StatusBar,
    SplashScreen,
    SQLite,
    IonicService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
