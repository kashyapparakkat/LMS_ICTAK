import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TrainersserviceService {

  constructor(private http:HttpClient,private router:Router) { }


  getAssignments()
  {
    
    return this.http.get("http://localhost:3000/api/getassign")

 
  }
   


  assignCreate(assignment:any){
   

    return this.http.post("http://localhost:3000/api/addassign",{assignment})
    .subscribe(data=>{console.log(data)})
   
     
  }

  deleteAssign(id:any){
    return this.http.delete("http://localhost:3000/api/remove/"+id)

  }

  getassignmentId(id:any){
    return this.http.get("http://localhost:3000/api/"+id);
  }

  editAssign(assign:any)
    {
      console.log('client update')
      return this.http.put("http://localhost:3000/api/update",assign)
      .subscribe(data =>{console.log(data)})
    }
  }

 


