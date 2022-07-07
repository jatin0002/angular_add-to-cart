import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public products: any = [];
  public grandTotal!: number;

  constructor(private cartApi: CartService) {}

  ngOnInit(): void {
    this.cartApi.getProducts().subscribe({
      next: (res) => {
        this.products = res;
        this.grandTotal = this.cartApi.getTotalPrice();
      },
    });
  }

  emptycart() {
    this.cartApi.removeAll();
  }
  removeItem(item: any) {
    this.cartApi.removeCartItem(item);
  }
}
