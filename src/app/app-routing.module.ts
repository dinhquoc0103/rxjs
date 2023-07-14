import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FromEventPatternComponent } from './from-event-pattern/from-event-pattern.component';

const routes: Routes = [
  { path: 'from-event-pattern', component: FromEventPatternComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
