import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionServiceService } from 'src/app/services/question-service.service';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent {

  questionId:any ='';
  questionData:any = {};

  constructor(private route:ActivatedRoute,private service: QuestionServiceService,private router:Router){ }

  ngOnInit(){
    this.questionId = this.route.snapshot.paramMap.get('questionId');
    this.service.GetPostedQuestionById(this.questionId).subscribe(
      (data:any)=>{
        console.log(data);
        this.questionData = data;
      },
      (error:any)=>{
        console.error(error);
        alert("Error occured: "+error.message);
      }
    );
  }

  updateQuestion(){
    this.service.UpdateQuestion(this.questionId, this.questionData).subscribe(
      (data:any)=>{
        console.log(data);
        this.router.navigate(['/postedQuestion']);
      },
      (error:any)=>{
        console.error(error);
        alert("Error occured: "+error.message);
      }
    );
  }

}
