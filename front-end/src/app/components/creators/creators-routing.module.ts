
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatorComponent } from './creator/creator.component';
import { CreatorsComponent } from './creators.component';


const routes: Routes = [
  { path: '', component: CreatorsComponent },
  {
    path: 'view/:id', component: CreatorComponent,
  },
];

@NgModule({
  
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatorsRoutingModule { }
