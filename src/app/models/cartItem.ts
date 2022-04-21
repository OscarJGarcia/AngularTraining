export class CartItem {
  name: string;
  price: number;
  quantity: number;
  total: number;
  constructor(name: string, price: number, quantity: number) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.total = this.quantity * this.price;
  }
}
