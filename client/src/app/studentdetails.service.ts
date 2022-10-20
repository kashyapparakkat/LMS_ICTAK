import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentdetailsService {

  //server_Address : string = 'http://localhost:3000/api'
  server_Address: String = ""

  constructor(private http:HttpClient) { }


  getStudents(){
    return this.http.get(`${this.server_Address}/studentdetails`);
  }
  approvestudent(data:any){
    console.log("service",data);
    return this.http.put(`${this.server_Address}/approvestudent/`,data);
   // return this.http.put("http://localhost:3000/api/studentdetails"+id);
  }

  deletestudent(id:any)
  {
    //console.log("deleting current student...",id);
    return this.http.delete(`${this.server_Address}/deletestudent/`+id);

  }

}
