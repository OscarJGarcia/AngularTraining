import { CartService } from './../../services/cart/cart.service';
import { Component, OnInit } from '@angular/core';
import { Meal } from 'src/app/models/meals';
import { MealsService } from 'src/app/services/meals/meals.service';
import { CartItem } from 'src/app/models/cartItem';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  mealsList: Meal[] = [];

  constructor(
    private mealsService: MealsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.mealsService.mealsChanged.subscribe((meals: Meal[]) => {
      this.mealsList = meals;
    });
    this.mealsList = this.mealsService._meals;
  }
  onAddMeal(meal: Meal) {
    let cartItem = new CartItem(meal.name, meal.price, 1);
    this.cartService.addCartItem(cartItem);
  }
}
