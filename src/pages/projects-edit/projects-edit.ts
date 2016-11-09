import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-projects-edit',
  templateUrl: 'projects-edit.html'
})
export class ProjectsEditPage {

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController
  ) {

  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  saveProject() {
    
  }

}