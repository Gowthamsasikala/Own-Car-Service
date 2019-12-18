import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { OwncarserviceComponent } from './owncarservice/owncarservice.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SplachscreenComponent } from './splachscreen/splachscreen.component';
import { HomeComponent } from './home/home.component';
import { FormsModule} from '@angular/forms';
import { TextboxComponent } from './textbox/textbox.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import {CalendarModule} from 'primeng/calendar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MyappointmentsComponent } from './myappointments/myappointments.component';
import {StepsModule} from 'primeng/steps';
@NgModule({
  declarations: [
    AppComponent,
    UserloginComponent,
    OwncarserviceComponent,
    NavigationComponent,
    SplachscreenComponent,
    HomeComponent,
    TextboxComponent,
    ProfileComponent,
    MyappointmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CalendarModule,
    BrowserAnimationsModule,
    StepsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
