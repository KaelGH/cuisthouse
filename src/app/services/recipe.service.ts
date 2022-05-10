import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipes: Recipe[];
  recipesUrl: any;

  constructor() { 
    // Recipes
    this.recipes = [
      {
        id: 1, 
        name: 'Apple Pie', 
        category: 'desert', 
        difficulty: new Array(2), 
        imgSrc: 'apple_pie.jpg', 
        slug: 'apple-pie', 
        bookmarked: true, 
        ingredients: ['175g/6oz digestive biscuits', '75g/3oz butter', '200g/7oz Bramley apples', '75g/3oz butter, softened', '75g/3oz caster sugar', '2 free-range eggs, beaten', '75g/3oz ground almonds', '1 tsp almond extract', '50g/1¾oz flaked almonds'],
        preparation: 'Preheat the oven to 200C/180C Fan/Gas 6. Put the biscuits in a large re-sealable freezer bag and bash with a rolling pin into fine crumbs. Melt the butter in a small pan, then add the biscuit crumbs and stir until coated with butter. Tip into the tart tin and, using the back of a spoon, press over the base and sides of the tin to give an even layer. Chill in the fridge while you make the filling. Cream together the butter and sugar until light and fluffy. You can do this in a food processor if you have one. Process for 2-3 minutes. Mix in the eggs, then add the ground almonds and almond extract and blend until well combined. Peel the apples, and cut thin slices of apple. Do this at the last minute to prevent the apple going brown. Arrange the slices over the biscuit base. Spread the frangipane filling evenly on top. Level the surface and sprinkle with the flaked almonds. Bake for 20-25 minutes until golden-brown and set. Remove from the oven and leave to cool for 15 minutes. Remove the sides of the tin. An easy way to do this is to stand the tin on a can of beans and push down gently on the edges of the tin. Transfer the tart, with the tin base attached, to a serving plate.Serve warm with cream, crème fraiche or ice cream.'
      },
      {
        id: 2,
        name: 'Pudding', 
        category: 'desert', 
        difficulty: new Array(2), 
        imgSrc: 'pudding.jpg', 
        slug: 'pudding', 
        bookmarked: false, 
        ingredients: ['175g/6oz digestive biscuits', '75g/3oz butter', '200g/7oz Bramley apples', '75g/3oz butter, softened', '75g/3oz caster sugar', '2 free-range eggs, beaten', '75g/3oz ground almonds', '1 tsp almond extract', '50g/1¾oz flaked almonds'],
        preparation: 'Preheat the oven to 200C/180C Fan/Gas 6. Put the biscuits in a large re-sealable freezer bag and bash with a rolling pin into fine crumbs. Melt the butter in a small pan, then add the biscuit crumbs and stir until coated with butter. Tip into the tart tin and, using the back of a spoon, press over the base and sides of the tin to give an even layer. Chill in the fridge while you make the filling. Cream together the butter and sugar until light and fluffy. You can do this in a food processor if you have one. Process for 2-3 minutes. Mix in the eggs, then add the ground almonds and almond extract and blend until well combined. Peel the apples, and cut thin slices of apple. Do this at the last minute to prevent the apple going brown. Arrange the slices over the biscuit base. Spread the frangipane filling evenly on top. Level the surface and sprinkle with the flaked almonds. Bake for 20-25 minutes until golden-brown and set. Remove from the oven and leave to cool for 15 minutes. Remove the sides of the tin. An easy way to do this is to stand the tin on a can of beans and push down gently on the edges of the tin. Transfer the tart, with the tin base attached, to a serving plate.Serve warm with cream, crème fraiche or ice cream.'
      },
      {
        id: 3, 
        name: 'Wellington Beef', 
        category: 'main course', 
        difficulty: new Array(3), 
        imgSrc: 'wellington_beef.jpg', 
        slug: 'wellington-beef', 
        bookmarked: false, 
        ingredients: ['175g/6oz digestive biscuits', '75g/3oz butter', '200g/7oz Bramley apples', '75g/3oz butter, softened', '75g/3oz caster sugar', '2 free-range eggs, beaten', '75g/3oz ground almonds', '1 tsp almond extract', '50g/1¾oz flaked almonds'],
        preparation: 'Preheat the oven to 200C/180C Fan/Gas 6. Put the biscuits in a large re-sealable freezer bag and bash with a rolling pin into fine crumbs. Melt the butter in a small pan, then add the biscuit crumbs and stir until coated with butter. Tip into the tart tin and, using the back of a spoon, press over the base and sides of the tin to give an even layer. Chill in the fridge while you make the filling. Cream together the butter and sugar until light and fluffy. You can do this in a food processor if you have one. Process for 2-3 minutes. Mix in the eggs, then add the ground almonds and almond extract and blend until well combined. Peel the apples, and cut thin slices of apple. Do this at the last minute to prevent the apple going brown. Arrange the slices over the biscuit base. Spread the frangipane filling evenly on top. Level the surface and sprinkle with the flaked almonds. Bake for 20-25 minutes until golden-brown and set. Remove from the oven and leave to cool for 15 minutes. Remove the sides of the tin. An easy way to do this is to stand the tin on a can of beans and push down gently on the edges of the tin. Transfer the tart, with the tin base attached, to a serving plate.Serve warm with cream, crème fraiche or ice cream.'
      },
      { 
        id: 4, 
        name: 'Roast Beef', 
        category: 'main course', 
        difficulty: new Array(4), 
        imgSrc: 'roast_beef.jpg', 
        slug: 'roast-beef', 
        bookmarked: true, 
        ingredients: ['175g/6oz digestive biscuits', '75g/3oz butter', '200g/7oz Bramley apples', '75g/3oz butter, softened', '75g/3oz caster sugar', '2 free-range eggs, beaten', '75g/3oz ground almonds', '1 tsp almond extract', '50g/1¾oz flaked almonds'],
        preparation: 'Preheat the oven to 200C/180C Fan/Gas 6. Put the biscuits in a large re-sealable freezer bag and bash with a rolling pin into fine crumbs. Melt the butter in a small pan, then add the biscuit crumbs and stir until coated with butter. Tip into the tart tin and, using the back of a spoon, press over the base and sides of the tin to give an even layer. Chill in the fridge while you make the filling. Cream together the butter and sugar until light and fluffy. You can do this in a food processor if you have one. Process for 2-3 minutes. Mix in the eggs, then add the ground almonds and almond extract and blend until well combined. Peel the apples, and cut thin slices of apple. Do this at the last minute to prevent the apple going brown. Arrange the slices over the biscuit base. Spread the frangipane filling evenly on top. Level the surface and sprinkle with the flaked almonds. Bake for 20-25 minutes until golden-brown and set. Remove from the oven and leave to cool for 15 minutes. Remove the sides of the tin. An easy way to do this is to stand the tin on a can of beans and push down gently on the edges of the tin. Transfer the tart, with the tin base attached, to a serving plate.Serve warm with cream, crème fraiche or ice cream.'
      },
      { 
        id: 5, 
        name: 'Good soup', 
        category: 'main course', 
        difficulty: new Array(1), 
        imgSrc: 'soup.jpg', 
        slug: 'soup', 
        bookmarked: false, 
        ingredients: ['175g/6oz digestive biscuits', '75g/3oz butter', '200g/7oz Bramley apples', '75g/3oz butter, softened', '75g/3oz caster sugar', '2 free-range eggs, beaten', '75g/3oz ground almonds', '1 tsp almond extract', '50g/1¾oz flaked almonds'],
        preparation: 'Preheat the oven to 200C/180C Fan/Gas 6. Put the biscuits in a large re-sealable freezer bag and bash with a rolling pin into fine crumbs. Melt the butter in a small pan, then add the biscuit crumbs and stir until coated with butter. Tip into the tart tin and, using the back of a spoon, press over the base and sides of the tin to give an even layer. Chill in the fridge while you make the filling. Cream together the butter and sugar until light and fluffy. You can do this in a food processor if you have one. Process for 2-3 minutes. Mix in the eggs, then add the ground almonds and almond extract and blend until well combined. Peel the apples, and cut thin slices of apple. Do this at the last minute to prevent the apple going brown. Arrange the slices over the biscuit base. Spread the frangipane filling evenly on top. Level the surface and sprinkle with the flaked almonds. Bake for 20-25 minutes until golden-brown and set. Remove from the oven and leave to cool for 15 minutes. Remove the sides of the tin. An easy way to do this is to stand the tin on a can of beans and push down gently on the edges of the tin. Transfer the tart, with the tin base attached, to a serving plate.Serve warm with cream, crème fraiche or ice cream.'
      },
      { 
        id: 6, 
        name: 'Banana Pancakes', 
        category: 'desert', 
        difficulty: new Array(1), 
        imgSrc: 'banana_pancakes.jpg', 
        slug: 'banana-pancakes', 
        bookmarked: true, 
        ingredients: ['175g/6oz digestive biscuits', '75g/3oz butter', '200g/7oz Bramley apples', '75g/3oz butter, softened', '75g/3oz caster sugar', '2 free-range eggs, beaten', '75g/3oz ground almonds', '1 tsp almond extract', '50g/1¾oz flaked almonds'],
        preparation: 'Preheat the oven to 200C/180C Fan/Gas 6. Put the biscuits in a large re-sealable freezer bag and bash with a rolling pin into fine crumbs. Melt the butter in a small pan, then add the biscuit crumbs and stir until coated with butter. Tip into the tart tin and, using the back of a spoon, press over the base and sides of the tin to give an even layer. Chill in the fridge while you make the filling. Cream together the butter and sugar until light and fluffy. You can do this in a food processor if you have one. Process for 2-3 minutes. Mix in the eggs, then add the ground almonds and almond extract and blend until well combined. Peel the apples, and cut thin slices of apple. Do this at the last minute to prevent the apple going brown. Arrange the slices over the biscuit base. Spread the frangipane filling evenly on top. Level the surface and sprinkle with the flaked almonds. Bake for 20-25 minutes until golden-brown and set. Remove from the oven and leave to cool for 15 minutes. Remove the sides of the tin. An easy way to do this is to stand the tin on a can of beans and push down gently on the edges of the tin. Transfer the tart, with the tin base attached, to a serving plate.Serve warm with cream, crème fraiche or ice cream.'
      },
      { 
        id: 7, 
        name: 'French Quiche', 
        category: 'main course', 
        difficulty: new Array(2), 
        imgSrc: 'quiche.jpg', 
        slug: 'french-quiche', 
        bookmarked: false, 
        ingredients: ['175g/6oz digestive biscuits', '75g/3oz butter', '200g/7oz Bramley apples', '75g/3oz butter, softened', '75g/3oz caster sugar', '2 free-range eggs, beaten', '75g/3oz ground almonds', '1 tsp almond extract', '50g/1¾oz flaked almonds'],
        preparation: 'Preheat the oven to 200C/180C Fan/Gas 6. Put the biscuits in a large re-sealable freezer bag and bash with a rolling pin into fine crumbs. Melt the butter in a small pan, then add the biscuit crumbs and stir until coated with butter. Tip into the tart tin and, using the back of a spoon, press over the base and sides of the tin to give an even layer. Chill in the fridge while you make the filling. Cream together the butter and sugar until light and fluffy. You can do this in a food processor if you have one. Process for 2-3 minutes. Mix in the eggs, then add the ground almonds and almond extract and blend until well combined. Peel the apples, and cut thin slices of apple. Do this at the last minute to prevent the apple going brown. Arrange the slices over the biscuit base. Spread the frangipane filling evenly on top. Level the surface and sprinkle with the flaked almonds. Bake for 20-25 minutes until golden-brown and set. Remove from the oven and leave to cool for 15 minutes. Remove the sides of the tin. An easy way to do this is to stand the tin on a can of beans and push down gently on the edges of the tin. Transfer the tart, with the tin base attached, to a serving plate.Serve warm with cream, crème fraiche or ice cream.'
      },
      { 
        id: 8, 
        name: 'Grilled Potatoes', 
        category: 'main course', 
        difficulty: new Array(1), 
        imgSrc: 'baked_potatoes.jpg', 
        slug: 'grilled-potatoes', 
        bookmarked: false, 
        ingredients: ['175g/6oz digestive biscuits', '75g/3oz butter', '200g/7oz Bramley apples', '75g/3oz butter, softened', '75g/3oz caster sugar', '2 free-range eggs, beaten', '75g/3oz ground almonds', '1 tsp almond extract', '50g/1¾oz flaked almonds'],
        preparation: 'Preheat the oven to 200C/180C Fan/Gas 6. Put the biscuits in a large re-sealable freezer bag and bash with a rolling pin into fine crumbs. Melt the butter in a small pan, then add the biscuit crumbs and stir until coated with butter. Tip into the tart tin and, using the back of a spoon, press over the base and sides of the tin to give an even layer. Chill in the fridge while you make the filling. Cream together the butter and sugar until light and fluffy. You can do this in a food processor if you have one. Process for 2-3 minutes. Mix in the eggs, then add the ground almonds and almond extract and blend until well combined. Peel the apples, and cut thin slices of apple. Do this at the last minute to prevent the apple going brown. Arrange the slices over the biscuit base. Spread the frangipane filling evenly on top. Level the surface and sprinkle with the flaked almonds. Bake for 20-25 minutes until golden-brown and set. Remove from the oven and leave to cool for 15 minutes. Remove the sides of the tin. An easy way to do this is to stand the tin on a can of beans and push down gently on the edges of the tin. Transfer the tart, with the tin base attached, to a serving plate.Serve warm with cream, crème fraiche or ice cream.'
      },
      { 
        id: 9, 
        name: 'Baked Salmon with Fennel and Tomatoes', 
        category: 'main course', 
        difficulty: new Array(3), 
        imgSrc: 'baked_salmon.jpg', 
        slug: 'baked-salmon-fennel-tomatoes', 
        bookmarked: true, 
        ingredients: ['175g/6oz digestive biscuits', '75g/3oz butter', '200g/7oz Bramley apples', '75g/3oz butter, softened', '75g/3oz caster sugar', '2 free-range eggs, beaten', '75g/3oz ground almonds', '1 tsp almond extract', '50g/1¾oz flaked almonds'],
        preparation: 'Preheat the oven to 200C/180C Fan/Gas 6. Put the biscuits in a large re-sealable freezer bag and bash with a rolling pin into fine crumbs. Melt the butter in a small pan, then add the biscuit crumbs and stir until coated with butter. Tip into the tart tin and, using the back of a spoon, press over the base and sides of the tin to give an even layer. Chill in the fridge while you make the filling. Cream together the butter and sugar until light and fluffy. You can do this in a food processor if you have one. Process for 2-3 minutes. Mix in the eggs, then add the ground almonds and almond extract and blend until well combined. Peel the apples, and cut thin slices of apple. Do this at the last minute to prevent the apple going brown. Arrange the slices over the biscuit base. Spread the frangipane filling evenly on top. Level the surface and sprinkle with the flaked almonds. Bake for 20-25 minutes until golden-brown and set. Remove from the oven and leave to cool for 15 minutes. Remove the sides of the tin. An easy way to do this is to stand the tin on a can of beans and push down gently on the edges of the tin. Transfer the tart, with the tin base attached, to a serving plate.Serve warm with cream, crème fraiche or ice cream.'
      },
    ];
  }

  // Get First 6 Recipes for /home
  getPartialRecipes(): Recipe[] {    
    const firstSixRecipes: Recipe[] | undefined = [];
    for (let i = 0; i <= 5; i++) {
        firstSixRecipes.push(this.recipes[i])
    };
    return firstSixRecipes;
  }

  // Get All Recipes for /recipes
  getRecipes(): Recipe[] {    
    return this.recipes;
  }

  // Get Single Recipe for /recipe
  getRecipe(slug: string | null): Recipe | undefined {
    const recipe = this.recipes.find(r => r.slug === slug);
    return recipe;
  }

  // Get Favorites Recipes for /bookmarks
  getFavorites(): Recipe[] | undefined {
    const favoritesRecipes: Recipe[] | undefined = [];
    this.recipes.forEach(recipe => {
      if(recipe.bookmarked === true) favoritesRecipes.push(recipe)
    });
    return favoritesRecipes;
  }
}
