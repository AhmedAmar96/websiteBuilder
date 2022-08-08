import { BusinsseComponent } from './businsse/businsse.component';
import { ContactComponent } from './contact/contact.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfountComponent } from './notfount/notfount.component';
import { DocsComponent } from './docs/docs.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { SportsComponent } from './sports/sports.component';
import { NewsComponent } from './news/news.component';
import { ECommersComponent } from './e-commers/e-commers.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },

  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'docs', component: DocsComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'sport', canActivate: [AuthGuard],component: SportsComponent
  },
  {
    path: 'Business',canActivate: [AuthGuard], component: BusinsseComponent
  },
  {
    path: 'news',canActivate: [AuthGuard], component: NewsComponent
  },
  {
    path: 'E-commers',canActivate: [AuthGuard], component: ECommersComponent
  },
  {
    path: '**', component: NotfountComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
