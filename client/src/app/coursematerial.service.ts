import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursematerialService {

  //server_Address : string = 'http://localhost:3000/api'
  server_Address: String = "api"

  constructor(public http:HttpClient) { }

  addmaterial(data:any){
    return this.http.post<any>(`${this.server_Address}/material`,data)
  }
  viewmaterial(){
    return this.http.get(`${this.server_Address}/material`)
  }

  deletematerial(id:any){
    return this.http.delete(`${this.server_Address}/material/${id}`)
  }

 updatematerial(id:any,data:any){
  console.log(`course data ${data}`)
  return this.http.patch(`${this.server_Address}/material/${id}`,data)
 }

 getcurrentmaterial(id:any){
  return this.http.get(`${this.server_Address}/material/${id}`)
  }

}
