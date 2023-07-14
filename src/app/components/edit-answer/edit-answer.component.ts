import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionServiceService } from 'src/app/services/question-service.service';

@Component({
  selector: 'app-edit-answer',
  templateUrl: './edit-answer.component.html',
  styleUrls: ['./edit-answer.component.css']
})
export class EditAnswerComponent {

  answerId:any ='';
  answerData:any = {};

  constructor(private route:ActivatedRoute,private service: QuestionServiceService){ }

  ngOnInit(){
    this.answerId = this.route.snapshot.paramMap.get('answerId');
    console.log(this.answerId);
    this.service.GetPostedAnswerById(this.answerId).subscribe((data:any)=>{
      console.log(data);
      this.answerData = data;
    })
  }

  updateAnswer(){
    this.service.UpdateAnswer(this.answerId, this.answerData).subscribe((data:any)=>{
      console.log(data);
    })
    

  }

}
