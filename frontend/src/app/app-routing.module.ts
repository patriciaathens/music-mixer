import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MusicpageComponent } from './components/musicpage/musicpage.component';

const routes: Routes = [
  { path: '', component:  MusicpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
