import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { HrModuleComponent } from './hr-module/hr-module.component';
import { CardModule } from 'primeng/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { SwDevelopmentComponent } from './sw-development/sw-development.component';
import { TabViewModule } from 'primeng/tabview';
import { QaComponent } from './qa/qa.component';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    HrModuleComponent,
    SwDevelopmentComponent,
    QaComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DialogModule,
    ButtonModule,
    BrowserAnimationsModule,
    CardModule,
    FormsModule,
    MessagesModule,
    ReactiveFormsModule,
    MessageModule,
    TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
