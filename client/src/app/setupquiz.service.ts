import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SetupquizService {

  server_address : string = 'http://localhost:3000/api'

  constructor(public http:HttpClient) { }

  viewquiz(){
    return this.http.get(`${this.server_address}/setup-quiz`)
  }

  addquestion(data:any){
    return this.http.post<any>(`${this.server_address}/setup-quiz`,data)
  }
  deletequestion(id:any){
    return this.http.delete(`${this.server_address}/setup-quiz/${id}`)
  }

  submitAnswerForQuestion(data: any){
    return this.http.put<any>(`${this.server_address}/submit-quiz`, data)
  }
}
