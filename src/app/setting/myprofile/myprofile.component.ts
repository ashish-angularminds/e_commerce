import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {

  constructor(private router: Router, private http: AuthService
    , private toast: NgToastService,) { }

  classes = 'btn rounded-circle position-absolute tl shadow-lg';

  user!: any;
  localToken = localStorage.getItem('activeuser') || '';

  ngOnInit() {
    this.loaddata();
  }

  loaddata() {
    this.http.get(this.localToken).subscribe(
      res => {
        this.user = res;
        console.log(this.user);
        if (res.isEmailVerified) {
          this.classes = 'bg-success-subtle text-success disabled btn rounded-circle position-absolute tl shadow-lg';
        }
        else {
          this.classes = 'bg-danger-subtle text-danger btn rounded-circle position-absolute tl shadow-lg';
        }
      },
    )
  }

  logout() {
    localStorage.removeItem('activeuser');
    this.router.navigate(['auth', 'login']);
  }

  verify() {
    this.http.sendverificationmail(this.localToken).subscribe(
      res => {
        this.toast.success({
          detail: 'Mail send successfully',
          summary: 'Check your email...',
          duration: 3000
        })
      },
      err => {
        console.log(err);
        this.toast.error({
          summary: err.error.message,
          duration: 3000
        })
      }
    )
  }
}
