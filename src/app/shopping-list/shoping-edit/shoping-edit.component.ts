import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef, OnDestroy } from '@angular/core';
import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list.service";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit,OnDestroy {

  @ViewChild('f') slForm: NgForm;

  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;

  editedItem: Ingredient

  constructor(private slService: ShoppingListService) { }

  // ngOnInit() {
  //   this.subscription = this.slService.startedEditing
  //     .subscribe(
  //       (index: number) => {
  //         this.editedItemIndex = index;
  //         this.editMode = true;
  //         this.editedItem = this.slService.getIngredient(index);
  //         this.slForm.setValue({
  //           name: this.editedItem.name,
  //           amount: this.editedItem.amount
  //         })
  //       }
  //     );
  // }

  ngOnInit() {
    this.subscription = this.slService.startedEditing
      .subscribe(
        (ingredient: Ingredient) => {
          // this.editedItemIndex = index;
          this.editMode = true;
          // this.editedItem = this.slService.getIngredient(index);
          this.slForm.setValue({
            name: ingredient.name,
            amount: ingredient.amount
          })
        }
      );
  }

  onAddItem(form: NgForm) {
    console.log("forms : ", form)
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    
    this.slService.addIngredient(newIngredient);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }

}
