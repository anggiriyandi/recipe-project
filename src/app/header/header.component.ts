import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "../shared/ingredient.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private recipeService: RecipeService) { }

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Big',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  ngOnInit() {
  }
    @Output() featureSelected = new EventEmitter<string>();
  
    onSelect(feature: string) {
      this.featureSelected.emit(feature);
    }

    onFetch(){
      this.recipeService.getRecipiesFromServer();
    }

}
