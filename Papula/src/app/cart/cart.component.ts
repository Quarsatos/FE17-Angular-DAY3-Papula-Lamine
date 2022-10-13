import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IProducts } from '../products/iproducts';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    
  items: IProducts[] = [];

  checkoutForm = new FormGroup({
    fname: new FormControl(""),
    lname: new FormControl(""),
    address: new FormControl(""),
    phone: new FormControl(""),
    email: new FormControl("")
  });
  
  constructor(
    private cartService: CartService) { }
  
  totalprice = 0;

  clearCart() {
    alert('Your cart has been cleared');
    this.items = this.cartService.clearCart();
  }

  onSubmit() {
    console.warn('Your order has been submitted',
    this.checkoutForm.value);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.totalprice = this.cartService.getTotal();
    console.log(this.totalprice)
  }

}
