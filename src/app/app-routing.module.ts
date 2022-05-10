import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './templates/home/home.component';
import { RecipesComponent } from './templates/recipes/recipes.component';
import { BookmarksComponent } from './templates/bookmarks/bookmarks.component';
import { RecipeComponent } from './templates/recipe/recipe.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'bookmarks', component: BookmarksComponent },
  { path: 'recipe', component: RecipeComponent },
  { path: 'recipe/:slug', component: RecipeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
