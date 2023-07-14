import { Component } from '@angular/core';
import { IQuestion } from 'src/app/models/IQuestion';
import { QuestionServiceService } from 'src/app/services/question-service.service';

@Component({
  selector: 'app-post-question',
  templateUrl: './post-question.component.html',
  styleUrls: ['./post-question.component.css']
})
export class PostQuestionComponent {

  public question:IQuestion={} as IQuestion;

  constructor(private service: QuestionServiceService){}

  postQuestion(){
    console.log(this.question);
    return this.service.PostQuestion(this.question).subscribe(
      (data)=>{
        console.log(data);
        this.clearForm();
      },
      (error)=>{
        console.error(error);
        alert("Error Occured: "+error.message);
      }
    );
  }
  

  clearForm() {
    this.question = {} as IQuestion; // Reset the question object to empty values
  }

}
