import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { Desktop1 } from './pages/desktop1/desktop1.component';
import { Desktop2 } from './pages/desktop2/desktop2.component';
import { Desktop13 } from './pages/desktop13/desktop13.component';

const routes: Routes =  [
  { path: 'home', component: Desktop1 },
  { path: 'quizz', component: Desktop2},
  { path: 'result', component: Desktop13},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
]

@NgModule({
  declarations: [],
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
