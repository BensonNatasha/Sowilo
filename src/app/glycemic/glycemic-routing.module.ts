import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlycemicPage } from './glycemic.page';

const routes: Routes = [
  {
    path: '',
    component: GlycemicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlycemicPageRoutingModule {}
