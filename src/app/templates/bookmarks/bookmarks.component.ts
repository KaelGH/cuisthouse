import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html'
})
export class BookmarksComponent implements OnInit {

  recipes: Recipe[] | undefined;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {

    this.recipes = this.recipeService.getFavorites();
  }

}
