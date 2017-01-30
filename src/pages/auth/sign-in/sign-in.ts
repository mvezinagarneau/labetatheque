import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignUp } from '../sign-up/sign-up';
import { TabsPage } from '../../tabs/tabs';
/*
  Generated class for the SignIn page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html'
})
export class SignIn {

 registerCredentials = {username: '',email: '', password: '', confirmPassword: ''};
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

  facebookSignIn(){
    console.log("sign in with facebook!");
  }

  gmailSignIn(){
    console.log("sign in with gmail!");
  }

  signIn(){
    this.navCtrl.setRoot(TabsPage);
  }

  signUp(){
    this.navCtrl.push(SignUp);
  
  }

}
