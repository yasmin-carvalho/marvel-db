
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StorieComponent } from './storie/storie.component';
import { StoriesComponent } from './stories.component';


const routes: Routes = [
  { path: '', component: StoriesComponent },
  {
    path: 'view/:id', component: StorieComponent,
  },
];

@NgModule({
  
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoriesRoutingModule { }
