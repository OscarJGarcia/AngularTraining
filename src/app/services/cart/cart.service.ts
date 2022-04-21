import { Subject } from 'rxjs';
import { CartItem } from './../../models/cartItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItemChanged = new Subject<Array<CartItem>>();
  private cartItems: Array<CartItem> = [];

  constructor() {}

  addCartItem(cartItem: CartItem) {
    this.cartItems.push(cartItem);
    this.cartItemChanged.next(this.cartItems.slice());
  }

  setCartItems(cartItems: Array<CartItem>) {
    this.cartItems = cartItems;
    this.cartItemChanged.next(this.cartItems.slice());
  }
  deleteCartItems() {
    this.cartItems = [];
    this.cartItemChanged.next([]);
  }
  deleteCartItem(index: number) {
    this.cartItems.splice(index, 1);
    this.cartItemChanged.next([]);
  }

  get _cartItems() {
    return this.cartItems.slice();
  }
}
