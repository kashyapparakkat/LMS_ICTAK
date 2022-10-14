import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddassignmentComponent } from './addassignment/addassignment.component';
import { AssigmentslistComponent } from './assigmentslist/assigmentslist.component';
import { FacultyregistrationComponent } from './facultyregistration/facultyregistration.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StudentsComponent } from './students/students.component';
import { UpdateassignmenttrainerComponent } from './updateassignmenttrainer/updateassignmenttrainer.component';


const routes: Routes = [{path:'',component:HomeComponent},{path:'login',component:LoginComponent},
{path:'facultyregistration',component:FacultyregistrationComponent},{path: 'students', component:StudentsComponent} ,{path:'addassignment',component:AddassignmentComponent},
{path:'getassignments',component:AssigmentslistComponent},{path:'update',component:UpdateassignmenttrainerComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
