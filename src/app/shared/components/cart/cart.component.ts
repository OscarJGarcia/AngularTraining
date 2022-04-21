import { CartService } from './../../../services/cart/cart.service';
import { Subject } from 'rxjs';
import { CartItem } from './../../../models/cartItem';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems: Array<CartItem> = [];
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.cartService.cartItemChanged.subscribe(
      (cartItems: Array<CartItem>) => (this.cartItems = cartItems)
    );
    this.cartItems = this.cartService._cartItems;
  }
}
