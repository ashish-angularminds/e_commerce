import { Component, Input, OnInit, Output } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SettingService } from 'src/app/service/setting.service';
@Component({
  selector: 'app-companysetting',
  templateUrl: './companysetting.component.html',
  styleUrls: ['./companysetting.component.css']
})

export class CompanysettingComponent implements OnInit {

  constructor(private settingservice: SettingService, private toast: NgToastService,
    private loader: NgxUiLoaderService) { }

  @Output() infouser: any = {
    name: '',
    email: ''
  };
  flag = false;
  change(u: any) {
    this.flag = true;
    this.infouser.name = u.name;
    this.infouser.email = u.email;
  }
  @Output() selectedid: any;


  org = {
    name: '',
    email: ''
  }

  pagination = {
    sortBy: 'role',
    limit: 5,
    page: 1
  }

  userpass = {
    password: ''
  }

  companyname!: string;

  pages: number[] = [];
  users: any[] = [];
  ngOnInit() {
    this.loadlist();
    this.settingservice.getuser({}).subscribe(data => {
      console.log(this.users.length)
      for (let i = 0; i <= data.length / 5; i++) {
        this.pages.push(i);
      }
    });
  }

  loadlist() {
    this.loader.start();
    this.settingservice.getuser(this.pagination).subscribe(data => {
      this.users = data;
      this.companyname = this.users.at(0)._org.name as string;
      this.loader.stop();
    });
  }

  changepage(id: number) {
    this.pagination.page = id;
    this.loadlist();
  }

  loadorg() {
    this.org.name = this.users!.at(0)!._org!.name as string;
    this.org.email = this.users!.at(0)!._org!.email as string;
  }
  updateorg() {
    this.settingservice.updateorg(this.org).subscribe(data => console.log(data));
    this.loadlist();
  }

  deleteuser() {
    this.settingservice.deleteuser(this.selectedid).subscribe(
      res => {
        this.toast.success({
          detail: 'User Deleted',
          summary: '...',
          duration: 3000,
        })
        this.loadlist();
        console.log(res);
      },
      err => {
        console.log(err);
        console.log(this.selectedid);
      }
    );
  }

  changepassword() {
    this.settingservice.changeinfo(this.userpass, this.selectedid).subscribe(
      res => {
        this.toast.success({
          detail: 'Password Changed',
          summary: '...',
          duration: 3000,
        })
        this.loadlist();
        console.log(res)
      },
      err => {
        console.log(err);
      }
    )
  }
}
