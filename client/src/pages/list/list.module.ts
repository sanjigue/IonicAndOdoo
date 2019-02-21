import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListPage } from './list';
import { NavController } from 'ionic-angular';


@NgModule({
  declarations: [
    ListPage,
  ],
  imports: [
    IonicPageModule.forChild(ListPage),
  ],
})


export class ListPageModule {

  constructor(public menuCtrl: IonicPageModule, public navCtrl: NavController) {

  }

}
