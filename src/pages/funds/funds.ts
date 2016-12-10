import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Funds page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-funds',
  templateUrl: 'funds.html'
})
export class Funds {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Funds Page');
  }

}
