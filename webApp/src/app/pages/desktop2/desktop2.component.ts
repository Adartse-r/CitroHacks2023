import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { ActivatedRoute, Router } from '@angular/router';
import { QuizzModel } from 'src/app/Model/quizz-model'
import { QuizzService } from 'src/app/Service/quizz-service';

@Component({
  selector: 'app-desktop2',
  templateUrl: 'desktop2.component.html',
  styleUrls: ['desktop2.component.css'],
})
export class Desktop2 {

  result: number = 0;  
  currentQuestion: QuizzModel;
  currentQuestionCount: number = 0;
  quizz: QuizzModel[];
  router: Router;
  quizzService: QuizzService;

  constructor(router: Router, quizzService: QuizzService) {
    this.router = router;
    this.quizzService = quizzService;
    // Question, AnswerA, AnswerB, AnswerC, Value of A, Value of B, Value of C
    this.quizz = [
      new QuizzModel("test", "a", "b", "c", 0, 1, -1),
      new QuizzModel("test2", "a2", "b2", "c2", -1, 0, 1)
    ]
    this.currentQuestion = this.quizz[0];
  }

  onClickAnswer(value: string) {
    switch(value) {
      case 'A': {
        this.result += this.currentQuestion.valueA;
      }
      case 'B': {
        this.result += this.currentQuestion.valueB;
      }
      case 'C': {
        this.result += this.currentQuestion.valueC;
      }
    }
    console.log("Before: "+this.currentQuestionCount);
    this.currentQuestionCount++;
    console.log("After: "+ this.currentQuestionCount);
    if(this.currentQuestionCount === this.quizz.length) {
      this.quizzService.setResult(this.result);
      this.router.navigate(["/result"]);
    } else {
      this.currentQuestion = this.quizz[this.currentQuestionCount];
    }
  }
}
