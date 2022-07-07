import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public totalItem: number = 0;
  constructor(private cartApi: CartService) {}

  ngOnInit(): void {
    this.cartApi.getProducts().subscribe({
      next: (res) => {
        this.totalItem = res.length;
      },
    });
  }
}
