import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { ProjectsEditPage } from '../projects-edit/projects-edit';

@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html'
})
export class ProjectsPage {

  projects = [
    {
      name: 'Canyon Lake House',
      address: '251 Wizard Way Spring Branch, Texas 78070'
    }
  ];

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {

  }

  goToProjectsEdit() {
    let modal = this.modalCtrl.create(ProjectsEditPage);
    modal.present();
  }

}