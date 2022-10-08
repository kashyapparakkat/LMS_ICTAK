import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacultyregistrationComponent } from './facultyregistration/facultyregistration.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MeanMay22Component } from './mean-may22/mean-may22.component';
import { SignupacknowledgeComponent } from './signupacknowledge/signupacknowledge.component';



import { StudentsComponent } from './students/students.component';
import { TrainerCoursesMeanComponent } from './trainer-courses-mean/trainer-courses-mean.component';

import { TrainerHomeComponent } from './trainer-home/trainer-home.component';


const routes: Routes = [{path:'',component:HomeComponent},{path:'login',component:LoginComponent},
{path:'facultyregistration',component:FacultyregistrationComponent},{path: 'students', component:StudentsComponent} ,{path:'signupacknowledge',component:SignupacknowledgeComponent},
{path:'forgotpassword',component:ForgotPasswordComponent},{path:'trainer-home',component:TrainerHomeComponent},{path:'trainer-mean',component:TrainerCoursesMeanComponent},
{path:'mean-may22',component:MeanMay22Component}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
