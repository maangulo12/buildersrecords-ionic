import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Expenditures page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-expenditures',
  templateUrl: 'expenditures.html'
})
export class Expenditures {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Expenditures Page');
  }

}
