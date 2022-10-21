import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentdetailsService {

  constructor(private http:HttpClient) { }

 
  getStudents(){
    return this.http.get("http://localhost:3000/api/studentdetails");
  }
  approvestudent(data:any){
    console.log("service",data);
    return this.http.put("http://localhost:3000/api/approvestudent/",data);
   // return this.http.put("http://localhost:3000/api/studentdetails"+id);
  }

  deletestudent(id:any)
  {
    //console.log("deleting current student...",id);
    return this.http.delete("http://localhost:3000/api/deletestudent/"+id);
    
  }

}
