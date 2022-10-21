import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentdetailsService {
  
  server_address : string = 'http://localhost:3000/api'

  constructor(private http:HttpClient) { }

 
  getStudents()
  {
    return this.http.get("http://localhost:3000/api/studentdetails");
  }
  gettutor()
  {
    return this.http.get("http://localhost:3000/api/tutorDetails");
  }
  approvestudent(data:any)
  {
    return this.http.put("http://localhost:3000/api/approvestudent/",data);
   
  }

  deletestudent(id:any)
  {
    //console.log("deleting current student...",id);
    return this.http.delete("http://localhost:3000/api/deletestudent/"+id);
  }

}
