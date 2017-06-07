import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddModalComponent } from './add-modal/add-modal.component';
import { MainComponent } from './main/main.component';

export const routesRoutes: Routes = [
  {path: '', component: MainComponent, children: [
    {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
    {path: 'dashboard', children: [
      {component: DashboardComponent, path: ''},
      {path: 'add', component: AddModalComponent, outlet: 'modal'},
    ]},
  ]},
];
