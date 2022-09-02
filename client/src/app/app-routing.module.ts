import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacultyregistrationComponent } from './facultyregistration/facultyregistration.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


import { StudentsComponent } from './students/students.component';


const routes: Routes = [{path:'',component:HomeComponent},{path:'login',component:LoginComponent},
{path:'facultyregistration',component:FacultyregistrationComponent},{path: 'students', component:StudentsComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
