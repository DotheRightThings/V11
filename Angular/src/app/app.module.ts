import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TopbannerComponent } from './homepage/topbanner/topbanner.component';
import { SloganbannerComponent } from './homepage/sloganbanner/sloganbanner.component';
import { TopfundsComponent } from './homepage/topfunds/topfunds.component';
import { ViewmoreComponent } from './homepage/topfunds/viewmore/viewmore.component';
import { FundsComponent } from './homepage/topfunds/funds/funds.component';
import { InvestwithUsComponent } from './homepage/investwithUs/investwithUs.component';
import { WaysComponent } from './homepage/investwithUs/ways/ways.component';
import { FundfinderComponent } from './homepage/fundfinder/fundfinder.component';
import { RecommendedComponent } from './homepage/recommended/recommended.component';
import { LeftComponent } from './homepage/recommended/left/left.component';
import { RightComponent } from './homepage/recommended/right/right.component';
import { VerticlineComponent } from './homepage/recommended/verticline/verticline.component';
import { BottomComponent } from './homepage/bottom/bottom.component';
import { FundfactsheetComponent } from './fundfactsheet/fundfactsheet.component';
import { ToptitleComponent } from './fundfactsheet/toptitle/toptitle.component';
import { BackgroundComponent } from './fundfactsheet/background/background.component';
import { FundnameComponent } from './fundfactsheet/fundname/fundname.component';
import { InformationComponent } from './fundfactsheet/information/information.component';
import { DocumentsComponent } from './fundfactsheet/documents/documents.component';
import { ObjectiveComponent } from './fundfactsheet/objective/objective.component';
import { PerformanceComponent } from './fundfactsheet/performance/performance.component';
import { TransactionComponent } from './fundfactsheet/transaction/transaction.component';
import { ChargesComponent } from './fundfactsheet/charges/charges.component';
import { AnnouncementComponent } from './fundfactsheet/announcement/announcement.component';
import { ReturnsComponent } from './fundfactsheet/returns/returns.component';
import { RiskComponent } from './fundfactsheet/risk/risk.component';
import { TopfundComponent } from './fundfactsheet/topfund/topfund.component';
import { DisclaimerComponent } from './fundfactsheet/disclaimer/disclaimer.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
registerLocaleData(en);
import { NZ_I18N, en_US } from 'ng-zorro-antd';
import { LoginComponent } from './login/login.component';
import { UserloginComponent } from './login/userlogin/userlogin.component';
import { AccCreationComponent } from './acc-creation/acc-creation.component';
import { LoginbackgroundComponent } from './login/loginbackground/loginbackground.component';
import { MinTopBannerComponent } from './acc-creation/min-top-banner/min-top-banner.component';
import { UploadIdComponent } from './acc-creation/upload-id/upload-id.component';
import { PersonalIComponent } from './acc-creation/personal-i/personal-i.component';
import { OtherIComponent } from './acc-creation/other-i/other-i.component';
import { AccReviewComponent } from './acc-creation/acc-review/acc-review.component';
import { ToptitleRegisterComponent } from './acc-creation/toptitle-register/toptitle-register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadComponent } from './acc-creation/upload-id/file-upload/file-upload.component';
import { UserDataService } from './user-data.service';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TopbannerComponent,
    SloganbannerComponent,
    TopfundsComponent,
    ViewmoreComponent,
    FundsComponent,
    InvestwithUsComponent,
    WaysComponent,
    FundfinderComponent,
    RecommendedComponent,
    LeftComponent,
    RightComponent,
    VerticlineComponent,
    BottomComponent,
    FundfactsheetComponent,
    ToptitleComponent,
    BackgroundComponent,
    FundnameComponent,
    InformationComponent,
    DocumentsComponent,
    ObjectiveComponent,
    PerformanceComponent,
    TransactionComponent,
    ChargesComponent,
    AnnouncementComponent,
    ReturnsComponent,
    RiskComponent,
    TopfundComponent,
    DisclaimerComponent,
    LoginComponent,
    UserloginComponent,
    AccCreationComponent,
    LoginbackgroundComponent,
    MinTopBannerComponent,
    UploadIdComponent,
    PersonalIComponent,
    OtherIComponent,
    AccReviewComponent,
    ToptitleRegisterComponent,
    FileUploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NzDatePickerModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserDataService,
    { provide: NZ_I18N, useValue: en_US },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
