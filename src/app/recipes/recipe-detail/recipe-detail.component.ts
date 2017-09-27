import { ActivatedRoute, Params } from '@angular/router';
import {RecipeService} from '../recipe.service';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  
  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute) {
}

ngOnInit() {
  this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id']; //casting dari string ke number
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
}

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
