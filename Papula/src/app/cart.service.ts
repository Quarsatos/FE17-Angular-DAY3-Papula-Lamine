import { Injectable } from '@angular/core';
import { IProducts } from './products/iproducts';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: IProducts[] = [];
  constructor() { }

  addToCart(product: IProducts){
    this.items.push(product);
  }
  getItems(){
    return this.items;
  }
  clearCart(){
    this.items = [];
    return this.items;
  }
  getTotal(){
    let total: number = 0;
    for(let item of this.items){
      total += item.price*item.qtty;
    }
    return total
  }
}
