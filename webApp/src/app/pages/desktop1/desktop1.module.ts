import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Desktop1 } from './desktop1.component'

const routes = [
  {
    path: '',
    component: Desktop1,
  },
]

@NgModule({
  declarations: [Desktop1],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Desktop1],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Desktop1Module {}
