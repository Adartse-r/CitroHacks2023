import { Component } from '@angular/core'
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

  constructor(router: Router) {
    this.quizzService = new QuizzService();
    this.router = router;
    // Question, AnswerA, AnswerB, AnswerC, Value of A, Value of B, Value of C
    this.quizz = [
      new QuizzModel("How often do you use single-use plastic items, such as plastic bags, bottles, or straws?", "Rarely or never", "Occasionally", "Frequently", 1, 0, -1),
      new QuizzModel("How do you typically commute to work or school?", "Public transportation, biking, or walking", "Carpooling or ridesharing", "Driving alone in a personal vehicle", 1, 0, -1),
      new QuizzModel("Do you actively seek out and purchase eco-friendly or sustainable products?", "Yes, I prioritize eco-friendly products in my purchases", "Occasionally, depending on availability and affordability", "No, sustainability is not a significant factor in my purchasing decisions", 1, 0, -1),
      new QuizzModel("How often do you recycle materials, such as paper, plastic, glass, or metal?", "Always or almost always", "Sometimes, when it's convenient", "Rarely or never", 1, 0, -1),
      new QuizzModel("How do you manage food waste in your household?", "Composting or feeding food scraps to animals", "Participating in a municipal composting program", "Throwing food waste in the regular trash", 1, 0, -1),
      new QuizzModel("How do you conserve energy at home?", "Turning off lights when not in use and using energy-efficient appliances", "Making some efforts to save energy, but not consistently", "Not actively taking steps to conserve energy", 1, 0, -1),
      new QuizzModel("Are you conscious of your water consumption?", "Yes, I take measures to reduce water usage, such as shorter showers and fixing leaks promptly", "I try to be mindful of water usage but could do better", "Water conservation is not a priority for me", 1, 0, -1),
      new QuizzModel("Do you support local and sustainable agriculture?", "Yes, I buy locally sourced and organic produce whenever possible", "Occasionally, depending on availability and affordability", "No, I don't actively seek out local or sustainable food options", 1, 0, -1),
      new QuizzModel("How often do you participate in or support environmental initiatives or organizations?", "Frequently, I'm actively involved in sustainability efforts", "Occasionally, I support or participate when opportunities arise", "Rarely or never", 1, 0, -1),
      new QuizzModel("How conscious are you of your overall environmental impact?", "I make a conscious effort to minimize my environmental footprint in various aspects of my life", "I try to be mindful, but there's room for improvement", "I haven't really considered my environmental impact", 1, 0, -1),
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
      this.router.navigate(["/result", {result: this.result}]);
    } else {
      this.currentQuestion = this.quizz[this.currentQuestionCount];
    }
  }
}
