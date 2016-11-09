import { Component } from '@angular/core';
import { NavController, ModalController, ActionSheetController } from 'ionic-angular';

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
    public modalCtrl: ModalController,
    public actionSheetCtrl: ActionSheetController
  ) {

  }

  goToProjectsEdit() {
    let modal = this.modalCtrl.create(ProjectsEditPage);
    modal.present();
  }

  deleteProject() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Delete Project',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            console.log('Delete clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}