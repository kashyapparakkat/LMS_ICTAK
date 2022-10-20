import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class tutordetailsService {

  //server_Address : string = 'http://localhost:3000/api'
  server_Address: String = ""

  constructor(private http:HttpClient) { }

 /* getStudent(id:any){
    return this.http.get("http://localhost:3000/"+id);
  }*/

  getTutor(){
    return this.http.get(`${this.server_Address}/tutorDetails`);
  }
  approveTutor(id:any){
    console.log("service",id);
    return this.http.put(`${this.server_Address}/approvetutor/`,id)
    .subscribe(data =>{console.log(data)})
   // return this.http.put("http://localhost:3000/api/studentdetails"+id);
  }

  deletetutor(id:any)
  {
    console.log("deleting current student...",id);
    return this.http.delete(`${this.server_Address}/deletetutor/`+id);

  }

}
