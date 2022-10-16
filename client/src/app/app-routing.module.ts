import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddassignmentComponent } from './addassignment/addassignment.component';
import { AssigmentslistComponent } from './assigmentslist/assigmentslist.component';
import { FacultyregistrationComponent } from './facultyregistration/facultyregistration.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MeanMay22Component } from './mean-may22/mean-may22.component';
import { SignupacknowledgeComponent } from './signupacknowledge/signupacknowledge.component';



import { StudentsComponent } from './students/students.component';
import { TrainerCoursesMeanComponent } from './trainer-courses-mean/trainer-courses-mean.component';

import { TrainerHomeComponent } from './trainer-home/trainer-home.component';
import {StudentHomeComponent} from "./student-home/student-home.component";
import {UpdateassignmenttrainerComponent} from "./updateassignmenttrainer/updateassignmenttrainer.component";
import {StudentAssignmentComponent} from "./student-assignment/student-assignment.component";
import {StudentUpdateAssignmentComponent} from "./student-update-assignment/student-update-assignment.component";


const routes: Routes = [{path:'',component:HomeComponent},{path:'login',component:LoginComponent},
{path:'facultyregistration',component:FacultyregistrationComponent},{path: 'students', component:StudentsComponent} ,{path:'signupacknowledge',component:SignupacknowledgeComponent},
{path:'forgotpassword',component:ForgotPasswordComponent},{path:'trainer-home',component:TrainerHomeComponent},{path:'trainer-mean',component:TrainerCoursesMeanComponent},
{path:'mean-may22',component:MeanMay22Component},
{path:'student-home',component:StudentHomeComponent},
  {path:'addassignment',component:AddassignmentComponent},
  {path:'getassignments',component:AssigmentslistComponent},{path:'update',component:UpdateassignmenttrainerComponent},
  {path:'getStudentAssignments',component:StudentAssignmentComponent},
  {path:'updateStudenAssignment',component:StudentUpdateAssignmentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
