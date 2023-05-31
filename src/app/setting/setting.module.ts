import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { CompanysettingComponent } from './companysetting/companysetting.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { AdduserComponent } from './companysetting/adduser/adduser.component';
import { ChangeinfoComponent } from './companysetting/changeinfo/changeinfo.component';
import { ChangemypasswordComponent } from './companysetting/changemypassword/changemypassword.component';
import { ChangeroleComponent } from './companysetting/changerole/changerole.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CompanysettingComponent,
    MyprofileComponent,
    AdduserComponent,
    ChangeinfoComponent,
    ChangemypasswordComponent,
    ChangeroleComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule,
    FormsModule,
  ]
})
export class SettingModule { }
