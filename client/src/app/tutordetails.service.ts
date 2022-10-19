import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class tutordetailsService {

  constructor(private http:HttpClient) { }

 /* getStudent(id:any){
    return this.http.get("http://localhost:3000/"+id);
  }*/
  
  getTutor(){
    return this.http.get("http://localhost:3000/api/tutorDetails");
  }
  approveTutor(id:any){
    console.log("service",id);
    return this.http.put("http://localhost:3000/approvetutor/",id)
    .subscribe(data =>{console.log(data)})
   // return this.http.put("http://localhost:3000/api/studentdetails"+id);
  }

  deletetutor(id:any)
  {
    console.log("deleting current student...",id);
    return this.http.delete("http://localhost:3000/api/deletetutor/"+id);
    
  }

}
