import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/merchant';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
   // Define the HTTP headers with the bearer token
    headers = new HttpHeaders({
    'Authorization': 'Bearer eyJraWQiOiIxNjk3NTUwNjgzNzk0IiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYifQ.eyJpc3MiOiJpWmV0dGxlIiwiYXVkIjoiQVBJIiwiZXhwIjoxNjk3NTczMjYzLCJzdWIiOiJmNzI0ZTJmNC1mNDYyLTExZWEtYWVhYS02YTFkYTI5NmNhMDciLCJpYXQiOjE2OTc1NjYwNjMsInJlbmV3ZWQiOmZhbHNlLCJjbGllbnRfaWQiOiIwOTFhYzNlOS02ODcwLTExZWUtYmNkOC1mZTJhY2M2ZDgyMjQiLCJ1c2VyIjp7InVzZXJUeXBlIjoiVVNFUiIsInV1aWQiOiJmNzI0ZTJmNC1mNDYyLTExZWEtYWVhYS02YTFkYTI5NmNhMDciLCJvcmdVdWlkIjoiZjcyMzFkYzAtZjQ2Mi0xMWVhLTliOTctNDEyZDc4ZjgyOGRkIiwidXNlclJvbGUiOiJPV05FUiJ9LCJzY29wZSI6WyJXUklURTpQUk9EVUNUIiwiUkVBRDpQVVJDSEFTRSIsIlJFQUQ6RklOQU5DRSIsIlJFQUQ6VVNFUklORk8iLCJSRUFEOlBST0RVQ1QiXX0.bs33V9Bu6ZaIk94XLFNBlEbYJZeuDbLWNZmwHc-cBfqDTFSlkzFhQDVnFbFnNOBV1izTPyjG9z0Lb4yGjWsSGsDdzVNAfxaxhTLo3pRm8YDngOSYyrd1LTOaenhP8abcTowbwkPHDLrcROWCfo8wRzpoyMh3UkPV4Pj14Im_k-NOOnMeHcYUpSE20wKo-onwmibNK3gD0jOwM0IiLnlJQ9waXhza_fn-lcCdj1lu_pZw8XBct62S_HyGIm4e2iVgRBdc7io6StRBWp0A32mYIcL6dOJixQ2-TnYjRMGqMB9OL2ckLxcJ8OcUZix11L18LGe4YcWfI-NbUhM3mbF2XQ', // Replace with your actual bearer token
  });
  private productLibraryApiBaseUrl = 'https://products.izettle.com';

  constructor(private http: HttpClient) {}

  // Define a method to fetch products
  getProducts(): Observable<Product[]> {
    const url = `${this.productLibraryApiBaseUrl}organizations/self/products`;
    return this.http.get<Product[]>(url, { headers: this.headers });

   // this.http.get().subscribe((data) => {
      // Handle the data
    
  }
}
