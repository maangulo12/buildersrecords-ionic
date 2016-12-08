import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProjectsPage } from '../projects/projects';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {                                     

  constructor(
    public navCtrl: NavController
  ) {}

  logIn() {
    // Authenticate

    // Success
    this.navCtrl.push(ProjectsPage);
  }

  goToSignup() {
    this.navCtrl.push(SignupPage);
  }
}