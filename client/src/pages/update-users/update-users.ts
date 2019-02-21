import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingsAdminPage } from '../../pages/settings-admin/settings-admin';
@IonicPage()
@Component({
  selector: 'page-update-users',
  templateUrl: 'update-users.html',
})
export class UpdateUsersPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public SettingsAdminPage: SettingsAdminPage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateUsersPage');
  }

}
