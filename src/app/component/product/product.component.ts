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
  searchKey: string = '';
  public filterCategory: any;

  constructor(private api: ApiService, private cartApi: CartService) {}

  ngOnInit(): void {
    this.api.getProducts().subscribe({
      next: (res) => {
        this.productList = res;
        this.filterCategory = res;
        this.productList.forEach((a: any) => {
          if (
            a.category === "women's clothing" ||
            a.category === "men's clothing"
          ) {
            a.category = 'fashion';
          }
          Object.assign(a, { quantity: 1, total: a.price });
        });
      },
      error: () => {},
    });
    this.cartApi.search.subscribe((val: any) => {
      this.searchKey = val;
    });
  }

  addtocart(item: any) {
    this.cartApi.addToCart(item);
  }

  filter(category: string) {
    this.filterCategory = this.productList.filter((a: any) => {
      if (a.category == category || category == '') {
        return a;
      }
    });
  }
}
