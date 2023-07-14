import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAnswerComponent } from './components/edit-answer/edit-answer.component';
import { HomeComponent } from './components/home/home.component';
import { PostQuestionComponent } from './components/post-question/post-question.component';
import { PostedQuestionsComponent } from './components/posted-questions/posted-questions.component';
import { UpdateQuestionComponent } from './components/update-question/update-question.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'postQuestion',
    component:PostQuestionComponent
  },
  {
    path:'postedQuestion',
    component:PostedQuestionsComponent
  },
  {
    path:'updateQuestion/:questionId',
    component:UpdateQuestionComponent
  },
  {
    path: 'editAnswer/:answerId',
    component:EditAnswerComponent 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
