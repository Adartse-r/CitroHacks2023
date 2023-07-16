import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { QuizzService } from 'src/app/Service/quizz-service';

@Component({
  selector: 'app-desktop13',
  templateUrl: 'desktop13.component.html',
  styleUrls: ['desktop13.component.css'],
})
export class Desktop13 {
  result: number = 0;

  constructor(quizzService: QuizzService) {
    this.result = quizzService.getResult();
  }
}
