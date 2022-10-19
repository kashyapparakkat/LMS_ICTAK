import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class BatchandcourseService {

  constructor(private http:HttpClient) { }
  newBatch(item:any)
  {   
    console.log("Welcome",item);
    return this.http.post("http://localhost:3000/api/add-batch",{item})
    .subscribe(data =>{console.log(data)})
  }
  newCourse(item:any)
  {   
    //console.log("haai");
    return this.http.post("http://localhost:3000/api/add-course",{item})
    .subscribe(data =>{console.log(data)})
  }
  coursedetails()
  {   
    //console.log("haai");
    return this.http.get("http://localhost:3000/api/coursedetails");
  }
  batchdetails()
  {   
    //console.log("haai");
    return this.http.get("http://localhost:3000/api/batchDetails");
  }
}
