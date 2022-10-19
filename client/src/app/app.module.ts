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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
 StudentsComponent,
 FacultyregistrationComponent,
 AdminhomeComponent,
 AdminapproveComponent,
 AdminapproveTrainerComponent,
 //AddcourseandbatchComponent,
 AddCourseComponent,
 AddBatchComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
