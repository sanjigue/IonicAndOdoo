import { Component } from '@angular/core';
import {ToastController, NavController } from 'ionic-angular';
import { IonicService } from '../../providers/ionic-service';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { ListPage } from '../../pages/list/list';

@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html'
})
export class SignUpPage {
  nuevoUser: any = { login: "", password: "" }
  newLogin:String;
  newPassword:string;

  formgroup: FormGroup;
  login: AbstractControl;
  password: AbstractControl;

  constructor(public navCtrl: NavController,  public ionicService: IonicService, public formbuilder:FormBuilder, private toastCtrl: ToastController) {
   
     this.formgroup = formbuilder.group({
      login:['', Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+.[a-zA-Z0-9-.]+$')])],
      password:['', Validators.required]
    });

    this.login = this.formgroup.controls['login'];
    this.password = this.formgroup.controls['password'];
  }

  informationForAddOne() {
    this.nuevoUser = { login: this.newLogin, password: this.newPassword };
    this.addOneUsers(this.nuevoUser);
    this.navCtrl.push(ListPage);
  }
  addOneUsers(nuevoUser){
    this.ionicService.addUser(nuevoUser).subscribe(() => {
      console.log("funcionó");
    }, error => {
      console.log(error);
    });
  }

  
}
