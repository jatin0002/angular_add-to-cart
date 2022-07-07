import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  public productList: any;

  constructor(private api: ApiService, private cartApi: CartService) {}

  ngOnInit(): void {
    this.api.getProducts().subscribe({
      next: (res) => {
        this.productList = res;
        this.productList.forEach((a: any) => {
          Object.assign(a, { quantity: 1, total: a.price });
        });
      },
      error: () => {},
    });
  }

  addtocart(item: any) {
    this.cartApi.addToCart(item);
  }
}
