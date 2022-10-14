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
import Quill from 'quill';
import { QuillModule } from 'ngx-quill';
import { AddassignmentComponent } from './addassignment/addassignment.component';
import { AssigmentslistComponent } from './assigmentslist/assigmentslist.component';
import { UpdateassignmenttrainerComponent } from './updateassignmenttrainer/updateassignmenttrainer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
    StudentsComponent,
     FacultyregistrationComponent,
     AddassignmentComponent,
     AssigmentslistComponent,
     UpdateassignmenttrainerComponent
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
