import {ActivatedRoute, Router} from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) { }
  
  ngOnInit() {
    console.log("on init pada recipes.list.component")
    this.recipes = this.recipeService.getRecipes()
  }
  recipes: Recipe[] = [];


  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
