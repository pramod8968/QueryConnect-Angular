import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedQuestionsComponent } from './posted-questions.component';

describe('PostedQuestionsComponent', () => {
  let component: PostedQuestionsComponent;
  let fixture: ComponentFixture<PostedQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostedQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostedQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
