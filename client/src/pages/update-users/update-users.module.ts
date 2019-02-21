import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpdateUsersPage } from './update-users';

@NgModule({
  declarations: [
    UpdateUsersPage,
  ],
  imports: [
    IonicPageModule.forChild(UpdateUsersPage),
  ],
})
export class UpdateUsersPageModule {}
