import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanysettingComponent } from './companysetting/companysetting.component';
import { MyprofileComponent } from './myprofile/myprofile.component';

const routes: Routes = [{
  path: 'my-profile',
  component: MyprofileComponent
},
{
  path: 'company-setting',
  component: CompanysettingComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
