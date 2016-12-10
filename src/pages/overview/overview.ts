import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html'
})
export class Overview {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Overview Page');
  }

}
