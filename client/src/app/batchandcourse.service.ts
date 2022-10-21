import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class BatchandcourseService {

  server_Address: String = "api"
  //server_Address: String = "http://localhost:3000/api"

  constructor(private http:HttpClient) { }
  newBatch(item:any)
  {
    console.log("Welcome",item);
    return this.http.post(`${this.server_Address}/add-batch`,{item})
    .subscribe(data =>{console.log(data)})
  }
  newCourse(item:any)
  {
    //console.log("haai");
    return this.http.post(`${this.server_Address}/add-course`,{item})
    .subscribe(data =>{console.log(data)})
  }
  coursedetails()
  {
    //console.log("haai");
    return this.http.get(`${this.server_Address}/coursedetails`);
  }
  batchdetails()
  {
    //console.log("haai");
    return this.http.get(`${this.server_Address}/batchDetails`);
  }
}
