import { asNativeElements, Component, ElementRef, getPlatform, Input, ViewChild } from '@angular/core';
import { IAnswer } from 'src/app/models/IAnswer';
import { IQuestion } from 'src/app/models/IQuestion';
import { QuestionServiceService } from 'src/app/services/question-service.service';



@Component({
  selector: 'app-posted-questions',
  templateUrl: './posted-questions.component.html',
  styleUrls: ['./posted-questions.component.css']
})
export class PostedQuestionsComponent {

  public questions:Array<IQuestion>=[];

  
  constructor(private service: QuestionServiceService){}

  @ViewChild('answer') answerTextArea!: ElementRef;

  // submittedAnswers: string[] = [];


  ngOnInit(){
    this.GetPostedQuestions();
  }

  GetPostedQuestions(){
    this.service.GetAllPostedQuestions().subscribe(
      (data:any)=>{
        console.log(data);
        this.questions = data;
      },
      (error:any)=>{
        console.error(error);
        alert("Error occured: "+error.message);
      }
    );
  }
  
  submitAnswer(answer:any, quesId:any){
    const answerData = {
      description : answer,
      questionId :  quesId,
    }
    console.log(answerData);
    this.service.PostAnswer(answerData).subscribe(
      (data)=>{
        console.log(data);
        this.GetPostedQuestions();
      },
      (error)=>{
        console.error(error);
        alert("Error Occured: "+error.message);
      }
    ); 
  }



  deleteQuestion(deleteQuestionId:string){
    console.log(deleteQuestionId);
    this.service.DeleteQuestion(deleteQuestionId).subscribe(
      (data)=>{
        console.log(data);
        this.GetPostedQuestions();
      },
      (error)=>{
        console.error(error);
        alert("Error Occurred: "+error.message);
      }
    );

  }

  deleteAnswer(deleteAnsId:string){
    console.log(deleteAnsId);
    this.service.DeleteAnswer(deleteAnsId).subscribe(
      (data)=>{
        console.log(data);
        this.GetPostedQuestions();
      },
      (error)=>{
        console.error(error);
        alert("Error Occured: "+error.message);
      }
    );
  }

  like(answerId:string){
    console.log(answerId);
    this.service.AddLike(answerId).subscribe(
      (data:any)=>{
        console.log(data);
        this.GetPostedQuestions();
      },
      (error:any)=>{
        console.error(error);
        alert("Error Occured: "+error.message);
      }
    );
  }

  disLike(answeId:string){
    this.service.AddDisLike(answeId).subscribe(
      (data:any)=>{
        console.log(data);
        this.GetPostedQuestions();
      },
      (error:any)=>{
        console.error(error);
        alert("Error Occured: "+error.message);
      }
    );
    
  }

  
  searchedText:string = '';
  getSearchText(){
    console.log(this.searchedText);
    // this.service.SearchQuestion(this.searchedText.toLowerCase()).subscribe((data:any)=>{
    //   console.log(data);
    // })
    
  }



}
