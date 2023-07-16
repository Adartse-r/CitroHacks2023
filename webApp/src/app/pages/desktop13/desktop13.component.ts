import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { ActivatedRoute } from '@angular/router';
import { QuizzService } from 'src/app/Service/quizz-service';

@Component({
  selector: 'app-desktop13',
  templateUrl: 'desktop13.component.html',
  styleUrls: ['desktop13.component.css'],
})
export class Desktop13 {
  result: string = "0";

  constructor(route: ActivatedRoute) {
    this.result = route.snapshot.paramMap.get('result');
  }
}
