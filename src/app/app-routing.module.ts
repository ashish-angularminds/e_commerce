import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileGuard } from './guards/profile.guard';

const routes: Routes = [
  { path: '', redirectTo: '/setting/my-profile', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    canActivate: [ProfileGuard]
  },
  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then((m) => m.SettingModule),
    // canActivate: [ProfileGuard]
  },
  { path: '**', redirectTo: '/auth/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
