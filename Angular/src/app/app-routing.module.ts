import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FundfactsheetComponent } from './fundfactsheet/fundfactsheet.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { AccCreationComponent } from './acc-creation/acc-creation.component';
import { PersonalIComponent } from './acc-creation/personal-i/personal-i.component';
import { OtherIComponent } from './acc-creation/other-i/other-i.component';
import { AccReviewComponent } from './acc-creation/acc-review/acc-review.component';


const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'fund-factsheet', component: FundfactsheetComponent},
  { path: 'homepage', component: HomepageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'acc-creation', component: AccCreationComponent},
  { path: 'personal-i', component: PersonalIComponent},
  { path: 'other-i', component: OtherIComponent},
  { path: 'acc-review', component: AccReviewComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
