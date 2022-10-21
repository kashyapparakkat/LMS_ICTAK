import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SetupquizService {

  //server_Address : string = 'http://localhost:3000/api'
  server_Address: String = "api"

  constructor(public http:HttpClient) { }

  viewquiz(){
    return this.http.get(`${this.server_Address}/setup-quiz`)
  }

  addquestion(data:any){
    return this.http.post<any>(`${this.server_Address}/setup-quiz`,data)
  }
  deletequestion(id:any){
    return this.http.delete(`${this.server_Address}/setup-quiz/${id}`)
  }
}
