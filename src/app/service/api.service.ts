import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  BASE_URL: string = 'https://fakestoreapi.com/products/';
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<any>(this.BASE_URL).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
