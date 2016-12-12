import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProjectsPage } from '../projects/projects';
import { OverviewPage } from '../overview/overview';
import { JobCostPage } from '../job-cost/job-cost';
import { SubcontractorsPage } from '../subcontractors/subcontractors';
import { FundsPage } from '../funds/funds';
import { ExpendituresPage } from '../expenditures/expenditures';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = OverviewPage;
  tab2Root: any = JobCostPage;
  tab3Root: any = SubcontractorsPage;
  tab4Root: any = FundsPage;
  tab5Root: any = ExpendituresPage;

  constructor(public navCtrl: NavController) {}

  goToProjects() {
    this.navCtrl.push(ProjectsPage);
  }
  
}