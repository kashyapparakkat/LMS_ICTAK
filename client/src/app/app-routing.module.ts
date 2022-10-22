import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminapproveComponent } from './adminapprove/adminapprove.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminapproveTrainerComponent } from './adminapprove-trainer/adminapprove-trainer.component';
import { AddassignmentComponent } from './addassignment/addassignment.component';
import { AssigmentslistComponent } from './assigmentslist/assigmentslist.component';
import { FacultyregistrationComponent } from './facultyregistration/facultyregistration.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StudentsComponent } from './students/students.component';
//import { AddcourseandbatchComponent } from './addcourseandbatch/addcourseandbatch.component';

import { MeanMay22Component } from './mean-may22/mean-may22.component';
import { SetupquizComponent } from './setupquiz/setupquiz.component';
import { SignupacknowledgeComponent } from './signupacknowledge/signupacknowledge.component';



import { TrainerCoursesMeanComponent } from './trainer-courses-mean/trainer-courses-mean.component';

import { TrainerHomeComponent } from './trainer-home/trainer-home.component';
import {StudentHomeComponent} from "./student-home/student-home.component";
import {UpdateassignmenttrainerComponent} from "./updateassignmenttrainer/updateassignmenttrainer.component";
import {StudentAssignmentComponent} from "./student-assignment/student-assignment.component";
import {StudentUpdateAssignmentComponent} from "./student-update-assignment/student-update-assignment.component";
import {AddBatchComponent} from "./add-batch/add-batch.component";
import {AddCourseComponent} from "./add-course/add-course.component";
import {StudentQuizComponent} from "./student-quiz/student-quiz.component";

/*const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'facultyregistration',component:FacultyregistrationComponent},
  {path: 'students', component:StudentsComponent} ,
  {path: 'adminhome', component:AdminhomeComponent},
  {path: 'adminapprove', component:AdminapproveComponent},
  {path: 'adminapprovetrainer', component:AdminapproveTrainerComponent},
  //{path: 'addcourseandbatch', component:AddcourseandbatchComponent},
  {path: 'addcourse', component:AddCourseComponent},
  {path: 'addbatch', component:AddBatchComponent},


];*/
const routes: Routes = [{path:'',component:HomeComponent},{path:'login',component:LoginComponent},
{path:'facultyregistration',component:FacultyregistrationComponent},{path: 'students', component:StudentsComponent} ,{path:'signupacknowledge',component:SignupacknowledgeComponent},
{path:'forgotpassword',component:ForgotPasswordComponent},{path:'trainer-home',component:TrainerHomeComponent},{path:'trainer-mean',component:TrainerCoursesMeanComponent},
{path:'mean-may22',component:MeanMay22Component},
{path:'student-home',component:StudentHomeComponent},
  {path:'addassignment',component:AddassignmentComponent},
  {path:'getassignments',component:AssigmentslistComponent},{path:'update',component:UpdateassignmenttrainerComponent},
  {path:'getStudentAssignments',component:StudentAssignmentComponent},
  {path:'updateStudenAssignment',component:StudentUpdateAssignmentComponent},
  {path:'setup-quiz',component:SetupquizComponent},
  {path: 'adminhome', component:AdminhomeComponent},
  {path: 'adminapprove', component:AdminapproveComponent},
  {path: 'adminapprovetrainer', component:AdminapproveTrainerComponent},
  //{path: 'addcourseandbatch', component:AddcourseandbatchComponent},
  {path: 'addcourse', component:AddCourseComponent},
  {path: 'addbatch', component:AddBatchComponent},
  {path:'student-quiz',component:StudentQuizComponent},];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
