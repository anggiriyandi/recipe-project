import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor() { }
  ngOnInit() {
  }
  recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'This is simply a test 1', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD8tdsd7nkUOji1QsAgGw3DPmtAlBWn9V9VmEaLm0OMqNzZu7Yjg'),
    new Recipe('A Test Recipe 2', 'This is simply a test 2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD8tdsd7nkUOji1QsAgGw3DPmtAlBWn9V9VmEaLm0OMqNzZu7Yjg')
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
   }
}
