import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddModalComponent } from './add-modal/add-modal.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { routesRoutes } from './routes.routes';
import { UsersService } from './shared/users.service';
import { FormsModule } from '@angular/forms';
import { EmailValidationDirective } from './directives/email-validation.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routesRoutes),
    FormsModule
  ],
  declarations: [DashboardComponent, AddModalComponent, MainComponent, EmailValidationDirective],
  entryComponents: [MainComponent],
  providers: [UsersService]
})
export class RoutesModule { }
