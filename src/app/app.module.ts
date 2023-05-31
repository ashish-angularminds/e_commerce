import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgToastModule } from 'ng-angular-popup';
import { HttpClientModule } from '@angular/common/http';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
import {
  NgxUiLoaderModule,
  NgxUiLoaderConfig,
} from "ngx-ui-loader";
import { environment } from './environment';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  "bgsColor": "#000000",
  "bgsOpacity": 0.5,
  "bgsPosition": "bottom-right",
  "bgsSize": 60,
  "bgsType": "ball-spin-clockwise-fade-rotating",
  "blur": 2,
  "delay": 0,
  "fastFadeOut": true,
  "fgsColor": "#ffffff",
  "fgsPosition": "center-center",
  "fgsSize": 90,
  "fgsType": "three-strings",
  "gap": 24,
  "logoPosition": "center-center",
  "logoSize": 120,
  "logoUrl": "",
  "masterLoaderId": "master",
  "overlayBorderRadius": "0",
  "overlayColor": "rgba(40, 40, 40, 0.8)",
  "pbColor": "#ffffff",
  "pbDirection": "ltr",
  "pbThickness": 3,
  "hasProgressBar": true,
  "text": "",
  "textColor": "#FFFFFF",
  "textPosition": "center-center",
  "maxTime": -1,
  "minTime": 300
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgToastModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    RecaptchaV3Module,
  ],
  providers: [{
    provide: RECAPTCHA_V3_SITE_KEY,
    useValue: environment.recaptcha.siteKey,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

