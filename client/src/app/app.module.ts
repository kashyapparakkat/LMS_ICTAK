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
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminapproveComponent } from './adminapprove/adminapprove.component';
import { AdminapproveTrainerComponent } from './adminapprove-trainer/adminapprove-trainer.component';
//import { AddcourseandbatchComponent } from './addcourseandbatch/addcourseandbatch.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddBatchComponent } from './add-batch/add-batch.component';
import { SignupacknowledgeComponent } from './signupacknowledge/signupacknowledge.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { TrainerHomeComponent } from './trainer-home/trainer-home.component';
import { TrainerCoursesMeanComponent } from './trainer-courses-mean/trainer-courses-mean.component';

import { MeanMay22Component } from './mean-may22/mean-may22.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { SetupquizComponent } from './setupquiz/setupquiz.component';


import Quill from 'quill';
import { QuillModule } from 'ngx-quill';
import { AddassignmentComponent } from './addassignment/addassignment.component';
import { AssigmentslistComponent } from './assigmentslist/assigmentslist.component';
import { UpdateassignmenttrainerComponent } from './updateassignmenttrainer/updateassignmenttrainer.component';
import {StudentAssignmentComponent} from "./student-assignment/student-assignment.component";
import { StudentUpdateAssignmentComponent } from './student-update-assignment/student-update-assignment.component';
import { TrainerassignmentvaluationComponent } from './trainerassignmentvaluation/trainerassignmentvaluation.component';
import { TrainerassignmentmarkupdateComponent } from './trainerassignmentmarkupdate/trainerassignmentmarkupdate.component';
import { ViewbatchandcourseComponent } from './viewbatchandcourse/viewbatchandcourse.component';
import {BatchwisestudentComponent} from './batchwisestudent/batchwisestudent.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
 StudentsComponent,
 FacultyregistrationComponent,
 /*AdminhomeComponent,
 AdminapproveComponent,
 AdminapproveTrainerComponent,
 //AddcourseandbatchComponent,
 AddCourseComponent,
 AddBatchComponent*/
    SignupacknowledgeComponent,
    ForgotPasswordComponent,
    TrainerHomeComponent,
    TrainerCoursesMeanComponent,
    MeanMay22Component,
    StudentsComponent,
/*
    FacultyregistrationComponent,
*/
    StudentHomeComponent,
    AddassignmentComponent,
    AssigmentslistComponent,
    UpdateassignmenttrainerComponent,
    StudentAssignmentComponent,
    StudentUpdateAssignmentComponent,
    SetupquizComponent,
    AdminhomeComponent,
    AdminapproveComponent,
    AdminapproveTrainerComponent,
    //AddcourseandbatchComponent,
    AddCourseComponent,
    AddBatchComponent,
    TrainerassignmentvaluationComponent,
    TrainerassignmentmarkupdateComponent,
    ViewbatchandcourseComponent,
    BatchwisestudentComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    QuillModule
],
  /*imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    HttpClientModule,
    QuillModule
  ],*/
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
