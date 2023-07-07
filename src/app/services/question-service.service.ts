import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IQuestion } from '../models/IQuestion';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {

  constructor(private http:HttpClient) { }

  // http://localhost:8080/
  ROOT_URL:string = "http://ness-stackoverflow.us-east-2.elasticbeanstalk.com";

  PostQuestion(question:IQuestion){
    return this.http.post("http://localhost:5000/stackOverflow/postQuestion",question);
  }

  GetAllPostedQuestions(){
    return this.http.get("http://localhost:5000/stackOverflow/getAllPostedQuestions");
  }

  GetPostedQuestionById(questionId:string){
    return this.http.get(`http://localhost:5000/stackOverflow/getQuestionById/${questionId}`);
  }

  PostAnswer(answer:any){
    return this.http.post("http://localhost:5000/stackOverflow/postAnswer", answer);
  }
  

  UpdateQuestion(questionId:string, questionToBeUpdated:IQuestion){
    return this.http.put(`http://localhost:5000/stackOverflow/updateQuestionById/${questionId}`,questionToBeUpdated);
    
  }

  DeleteQuestion(deleteQuestionId:string){
    return this.http.delete(`http://localhost:5000/stackOverflow/deleteQuestion/${deleteQuestionId}`);
  }

  DeleteAnswer(deleteAnswerId:string){
    return this.http.delete(`http://localhost:5000/stackOverflow/deleteAnswer/${deleteAnswerId}`);
  }

}
