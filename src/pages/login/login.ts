import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { ProjectsPage } from '../projects/projects';
import { SignupPage } from '../signup/signup';
import { UserService } from '../../providers/user.service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [UserService]
})
export class LoginPage {

  constructor(
    public navCtrl: NavController, 
    public loadingCtrl: LoadingController,
    private userService: UserService
  ) { 
    
  }

  logIn() {
    // Do authentication here

    // Present Loading 
    this.presentLoading();

    // Go to Projects page
    this.navCtrl.push(ProjectsPage);
  }

  goToSignup() {
    this.navCtrl.push(SignupPage);
  }
  
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 50
    });
    loader.present();
  }

}