import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Subcontractors page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-subcontractors',
  templateUrl: 'subcontractors.html'
})
export class Subcontractors {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Subcontractors Page');
  }

}
