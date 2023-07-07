import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
