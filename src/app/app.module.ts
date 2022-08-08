import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotfountComponent } from './notfount/notfount.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { DocsComponent } from './docs/docs.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SpinerComponent } from './spiner/spiner.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {DragDropModule} from '@angular/cdk/drag-drop';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { RemovePipe } from './remove.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SportsComponent } from './sports/sports.component';
import { NewsComponent } from './news/news.component';
import { BusinsseComponent } from './businsse/businsse.component';
import { ECommersComponent } from './e-commers/e-commers.component';
import {MatStepperIntl, MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,

    NavbarComponent,
    AboutComponent,
    ContactComponent,
    NotfountComponent,
    FooterComponent,

    DocsComponent,
    SpinerComponent,
    RemovePipe,
    SportsComponent,
    NewsComponent,
    BusinsseComponent,
    ECommersComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    IvyCarouselModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    DragDropModule,
    CdkAccordionModule,
    FlexLayoutModule,
    MatStepperModule,
    MatIconModule,
    MatButtonModule,



  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
