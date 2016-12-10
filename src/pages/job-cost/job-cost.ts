import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the JobCost page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-job-cost',
  templateUrl: 'job-cost.html'
})
export class JobCost {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello JobCost Page');
  }

}
