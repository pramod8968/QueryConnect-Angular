import { Component, ElementRef, getPlatform, ViewChild } from '@angular/core';
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
    this.service.GetAllPostedQuestions().subscribe((data:any)=>{
      console.log(data);
      this.questions = data;
    })
  }
  
  submitAnswer(answer:any, quesId:any){
    const answerData = {
      description : answer,
      questionId :  quesId,
    }
    console.log(answerData);
    this.service.PostAnswer(answerData).subscribe((data)=>{
      console.log(data);
      this.GetPostedQuestions();
    })
  }

  

  deleteQuestion(deleteQuestionId:string){
    console.log(deleteQuestionId);
    this.service.DeleteQuestion(deleteQuestionId).subscribe((data)=>{
      console.log(data);
      this.GetPostedQuestions();
    })

  }

  deleteAnswer(deleteAnsId:string){
    console.log(deleteAnsId);
    this.service.DeleteAnswer(deleteAnsId).subscribe((data)=>{
      console.log(data);
      this.GetPostedQuestions();
    })
  }

}
