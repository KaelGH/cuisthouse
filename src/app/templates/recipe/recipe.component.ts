import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html'
})
export class RecipeComponent implements OnInit {

  recipe: Recipe | undefined;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
  ) { }

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.recipe = this.recipeService.getRecipe(slug)
  }

}
