import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Desktop2 } from './desktop2.component'

const routes = [
  {
    path: '',
    component: Desktop2,
  },
]

@NgModule({
  declarations: [Desktop2],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Desktop2],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Desktop2Module {}
