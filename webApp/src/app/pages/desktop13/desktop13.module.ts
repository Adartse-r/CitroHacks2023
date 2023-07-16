import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Desktop13 } from './desktop13.component'

const routes = [
  {
    path: '',
    component: Desktop13,
  },
]

@NgModule({
  declarations: [Desktop13],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Desktop13],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Desktop13Module {}
