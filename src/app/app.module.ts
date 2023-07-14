import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { PostQuestionComponent } from './components/post-question/post-question.component';
import { PostedQuestionsComponent } from './components/posted-questions/posted-questions.component';
import { UpdateQuestionComponent } from './components/update-question/update-question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EditAnswerComponent } from './components/edit-answer/edit-answer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    LayoutComponent,
    HomeComponent,
    PostQuestionComponent,
    PostedQuestionsComponent,
    UpdateQuestionComponent,
    EditAnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
