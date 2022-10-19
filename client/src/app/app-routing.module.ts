import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminapproveComponent } from './adminapprove/adminapprove.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminapproveTrainerComponent } from './adminapprove-trainer/adminapprove-trainer.component';
import { FacultyregistrationComponent } from './facultyregistration/facultyregistration.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StudentsComponent } from './students/students.component';
//import { AddcourseandbatchComponent } from './addcourseandbatch/addcourseandbatch.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddBatchComponent } from './add-batch/add-batch.component';


const routes: Routes = [
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
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
