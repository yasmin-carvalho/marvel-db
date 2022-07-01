import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SearchInfoComponent } from './components/search-info/search-info.component';

const routes: Routes = [
    { path: 'main-page', component: MainPageComponent,
    },
    {
      path: 'characters', 
      loadChildren: () => import('./components/characters/characters.module').then(m => m.CharactersModule)
    },
    {
      path: 'stories', 
      loadChildren: () => import('./components/stories/stories.module').then(m => m.StoriesModule)
    },
    {
      path:'creators',
      loadChildren: () => import('./components/creators/creators.module').then(m => m.CreatorsModule)
    },
    {
      path: 'search', component: SearchInfoComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
