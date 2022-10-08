import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursematerialService {

  server_address : string = 'http://localhost:3000/api'

  constructor(public http:HttpClient) { }

  addmaterial(data:any){
    return this.http.post<any>(`${this.server_address}/material`,data)
  }
  viewmaterial(){
    return this.http.get(`${this.server_address}/material`)
  }

  deletematerial(id:any){
    return this.http.delete(`${this.server_address}/material/${id}`)
  }

 updatematerial(id:any,data:any){
  return this.http.patch(`${this.server_address}/material/${id}`,data)
 } 

 getcurrentmaterial(id:any){
  return this.http.get(`${this.server_address}/material/${id}`)
  }

}
