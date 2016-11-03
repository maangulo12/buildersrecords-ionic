import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { ProjectsPage } from '../projects/projects';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(
    public navCtrl: NavController, 
    public loadingCtrl: LoadingController
  ) {

  }

  signUp() {
    // Do authentication here

    // Present Loading 
    this.presentLoading();

    // Go to Projects page
    this.navCtrl.push(ProjectsPage);
  }

  goToLogin() {
    this.navCtrl.push(LoginPage);
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 50
    });
    loader.present();
  }

}