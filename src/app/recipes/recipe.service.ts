import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChaned = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Test', 'Basic Test', 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fimg1.southernliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2017%2F01%2Fmain%2Fsoups-and-stews-utot_5_west_213_0.jpg%3Fitok%3Dq_X2RYH-&w=700&q=85',
    [
      new Ingredient('Meat', 1),
      new Ingredient('Fries', 20)
    ]),
    new Recipe('Test', 'Basic Test', 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fimg1.southernliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2017%2F01%2Fmain%2Fsoups-and-stews-utot_5_west_213_0.jpg%3Fitok%3Dq_X2RYH-&w=700&q=85',
    [
      new Ingredient('Bread', 3),
      new Ingredient('Meat', 3)
    ])
  ];

  constructor(private slService: ShoppingListService) { }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChaned.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  buyIngredients(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChaned.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChaned.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChaned.next(this.recipes.slice());
  }
  
}
