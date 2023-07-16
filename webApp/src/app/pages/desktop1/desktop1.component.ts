import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Router } from '@angular/router';

@Component({
  selector: 'app-desktop1',
  templateUrl: 'desktop1.component.html',
  styleUrls: ['desktop1.component.css'],
})
export class Desktop1 {
  
  router: Router;
  constructor(router: Router) {
  }
}
