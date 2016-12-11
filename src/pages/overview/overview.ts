import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { JobCostPage } from '../job-cost/job-cost';
import { SubcontractorsPage } from '../subcontractors/subcontractors';
import { FundsPage } from '../funds/funds';
import { ExpendituresPage } from '../expenditures/expenditures';

@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html'
})
export class OverviewPage {

  constructor(public navCtrl: NavController) {}

}