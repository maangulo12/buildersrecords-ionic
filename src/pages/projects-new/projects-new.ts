import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-projects-new',
  templateUrl: 'projects-new.html'
})
export class ProjectsNewPage {

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