import {ActivatedRoute, Router} from '@angular/router';
import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {

  ngOnDestroy(): void {
    this.subscription.unsubscribe
  }
  
  subscription: Subscription;
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged
    .subscribe (
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipeService.getRecipes()
  }
  
  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
