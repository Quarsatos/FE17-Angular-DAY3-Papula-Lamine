import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { products } from '../products/products';
import { IProducts } from '../products/iproducts';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: IProducts = {} as IProducts;
  id:  number = 0;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) =>{
      this.id = + params["productId"];
      this.product =  products[this.id]
    });
  }
  addToCart(){
    alert("Your product has been added to the cart!");
    this.cartService.addToCart(this.product)
  }
}
