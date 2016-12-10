import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html'
})
export class OverviewPage {

  tabOverview: any;
  tabJobCost: any;
  tabSubcontractor: any;
  tabFunds: any;
  tabExpenditures: any;

  constructor(public navCtrl: NavController) {}

}