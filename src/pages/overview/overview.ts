import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProjectsPage } from '../projects/projects';

@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html'
})
export class OverviewPage {

  constructor(public navCtrl: NavController) {}

  goToProjects() {
    this.navCtrl.push(ProjectsPage);
  }
}