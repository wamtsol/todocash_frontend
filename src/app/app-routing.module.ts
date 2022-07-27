import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralSettingsComponent } from './dashboard/general-settings/general-settings.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
	{
		path: 'dashboard',
		component: DashboardComponent,
	},
	{
		path: 'general-settings',
		component: GeneralSettingsComponent,
	},
  	{
		path: 'users',
		component: UsersComponent,
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
