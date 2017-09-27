import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from "./recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'This is simply a test 1', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD8tdsd7nkUOji1QsAgGw3DPmtAlBWn9V9VmEaLm0OMqNzZu7Yjg'),
    new Recipe('A Test Recipe 2', 'This is simply a test 2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD8tdsd7nkUOji1QsAgGw3DPmtAlBWn9V9VmEaLm0OMqNzZu7Yjg')
  ];

  getRecipes() {
    return this.recipes;
  }
}
