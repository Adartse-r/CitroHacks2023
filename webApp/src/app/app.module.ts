import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { ComponentsModule } from './components/components.module'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'

const routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/desktop1/desktop1.module').then((m) => m.Desktop1Module),
  },
  {
    path: 'desktop2',
    loadChildren: () =>
      import('./pages/desktop2/desktop2.module').then((m) => m.Desktop2Module),
  },
  {
    path: 'desktop13',
    loadChildren: () =>
      import('./pages/desktop13/desktop13.module').then(
        (m) => m.Desktop13Module
      ),
  },
]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
