
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './character/character.component';
import { CharactersComponent } from './characters.component';


const routes: Routes = [
  { path: '', component: CharactersComponent },
  {
    path: 'view/:id', component: CharacterComponent,
  },
];

@NgModule({
  
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersRoutingModule { }
