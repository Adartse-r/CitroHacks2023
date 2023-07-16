import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-desktop1',
  templateUrl: 'desktop1.component.html',
  styleUrls: ['desktop1.component.css'],
})
export class Desktop1 {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
