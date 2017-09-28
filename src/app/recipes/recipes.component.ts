import { RecipeService } from './recipe.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Recipe } from "./recipe.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit,OnDestroy {

  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    console.log("on init pada recipes.component")
    this.recipeService.recipeSelected
      .subscribe (
        (recipe: Recipe) => {
          this.selectedRecipe = recipe;
        }
      );
  }

  ngOnDestroy(): void {
    console.log("jalankan on destroy")
  }

}
