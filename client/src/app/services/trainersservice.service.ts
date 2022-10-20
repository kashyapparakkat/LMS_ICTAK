import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TrainersserviceService {

  server_Address: String = ""
  //server_Address: String = "http://localhost:3000/api"
  constructor(private http:HttpClient,private router:Router) { }





  getAssignments()
  {

    return this.http.get(`${this.server_Address}/getassign`)


  }



  assignCreate(assignment:any){


    return this.http.post(`${this.server_Address}/addassign`,{assignment})
    .subscribe(data=>{console.log(data)})


  }

  deleteAssign(id:any){
    return this.http.delete(`${this.server_Address}/remove/`+id)

  }

  getassignmentId(id:any){
    return this.http.get(`${this.server_Address}/assign/`+id);
  }

  editAssign(assign:any)
    {
      console.log('client update')
      return this.http.put(`${this.server_Address}/update`,assign)
      .subscribe(data =>{console.log(data)})
    }

  editStudentSubmissionText(assign:any)
  {
    console.log('client update')
    return this.http.put(`${this.server_Address}/updateSubmissionText`,assign)
      .subscribe(data =>{console.log(data)})
  }
  }




