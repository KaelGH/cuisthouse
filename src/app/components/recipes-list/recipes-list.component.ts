import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html'
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] | undefined;

  constructor(private recipeService: RecipeService, private router:Router) {}

  ngOnInit() {
    // Call specific get() from specific route
    if (this.router.url === '/bookmarks') {
      this.recipes = this.recipeService.getFavorites();
    } else if (this.router.url === '/recipes'){
      this.recipes = this.recipeService.getRecipes();
    } else {
      this.recipes = this.recipeService.getPartialRecipes();
    } 
  }

  // Toggle Recipe Favorite boolean
  toggleFavorite(recipe: Recipe){
    recipe.bookmarked = !recipe.bookmarked
    this.ngOnInit();
  }
}
