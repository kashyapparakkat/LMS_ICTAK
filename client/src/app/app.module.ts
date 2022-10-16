import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FacultyregistrationComponent } from './facultyregistration/facultyregistration.component';

import { StudentsComponent } from './students/students.component';
import { SignupacknowledgeComponent } from './signupacknowledge/signupacknowledge.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { TrainerHomeComponent } from './trainer-home/trainer-home.component';
import { TrainerCoursesMeanComponent } from './trainer-courses-mean/trainer-courses-mean.component';

import { MeanMay22Component } from './mean-may22/mean-may22.component';
import { StudentHomeComponent } from './student-home/student-home.component';


import Quill from 'quill';
import { QuillModule } from 'ngx-quill';
import { AddassignmentComponent } from './addassignment/addassignment.component';
import { AssigmentslistComponent } from './assigmentslist/assigmentslist.component';
import { UpdateassignmenttrainerComponent } from './updateassignmenttrainer/updateassignmenttrainer.component';
import {StudentAssignmentComponent} from "./student-assignment/student-assignment.component";
import { StudentUpdateAssignmentComponent } from './student-update-assignment/student-update-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
 StudentsComponent,
 FacultyregistrationComponent,
 SignupacknowledgeComponent,
 ForgotPasswordComponent,
 TrainerHomeComponent,
 TrainerCoursesMeanComponent,
 MeanMay22Component,
    StudentsComponent,
     FacultyregistrationComponent,
     StudentHomeComponent,
     AddassignmentComponent,
     AssigmentslistComponent,
     UpdateassignmenttrainerComponent,
    StudentAssignmentComponent,
    StudentUpdateAssignmentComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    QuillModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
