import { Routes } from '@angular/router';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './forms/template-form/template-form.component';

export const appRoutes: Routes = [
  {path: '', component: TemplateFormComponent},
  {path: 'reactive', component: ReactiveFormComponent},
  {path: 'routes', loadChildren: './routes/routes.module#RoutesModule'},
];
