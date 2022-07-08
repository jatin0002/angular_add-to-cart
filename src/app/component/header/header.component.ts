import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public totalItem: number = 0;
  public searchTerm!: string;

  constructor(private cartApi: CartService) {}

  ngOnInit(): void {
    this.cartApi.getProducts().subscribe({
      next: (res) => {
        this.totalItem = res.length;
      },
    });
  }

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartApi.search.next(this.searchTerm);
  }
}
