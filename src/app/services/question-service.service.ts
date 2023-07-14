import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IQuestion } from '../models/IQuestion';
import { IAnswer } from '../models/IAnswer';

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

  GetPostedAnswerById(answerId:string){
    return this.http.get(`http://localhost:5000/stackOverflow/getPostedAnswerById/${answerId}`);
  }
  

  UpdateQuestion(questionId:string, questionToBeUpdated:IQuestion){
    return this.http.put(`http://localhost:5000/stackOverflow/updateQuestionById/${questionId}`,questionToBeUpdated);
    
  }

  UpdateAnswer(answeId:string, answerToBeUpdated:IAnswer){
    return this.http.put(`http://localhost:5000/stackOverflow/updateAnswerById/${answeId}`,answerToBeUpdated);
  }

  AddLike(answerId:string){
    return this.http.put(`http://localhost:5000/stackOverflow/updateLikesByAnswerById/${answerId}`, {});
  }

  AddDisLike(answeId:string){
    return this.http.put(`http://localhost:5000/stackOverflow/updateDisLikesByAnswerId/${answeId}`, {});
  }

  SearchQuestion(query:string){
    return this.http.get(`http://localhost:5000/stackOverflow/getSearchedQuestions/${query}`);
  }

  DeleteQuestion(deleteQuestionId:string){
    return this.http.delete(`http://localhost:5000/stackOverflow/deleteQuestion/${deleteQuestionId}`);
  }

  DeleteAnswer(deleteAnswerId:string){
    return this.http.delete(`http://localhost:5000/stackOverflow/deleteAnswer/${deleteAnswerId}`);
  }

}
