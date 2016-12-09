import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProjectsPage } from '../projects/projects';
import { LoginPage } from '../login/login';
import { User } from '../../models/user';
import { UserService } from '../../providers/user.service';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  providers: [UserService]
})
export class SignupPage {

  user = new User('', '', '');
  errorMessage: string;

  constructor(
    public navCtrl: NavController,
    private userService: UserService
  ) {}

  signUp() {
    // Add user

    // Success
    this.navCtrl.push(ProjectsPage);
  }

  goToLogin() {
    this.navCtrl.push(LoginPage);
  } 

  addUser(user: User) {
    if (!user) { return; }

    this.userService
      .addUser(user)
      .subscribe(
        user  => this.user = user,
        error => this.errorMessage = <any>error);
  }
}