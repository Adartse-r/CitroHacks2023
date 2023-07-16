import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-desktop13',
  templateUrl: 'desktop13.component.html',
  styleUrls: ['desktop13.component.css'],
})
export class Desktop13 {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
