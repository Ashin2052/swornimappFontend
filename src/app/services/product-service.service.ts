import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../product-list/product-list.component';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {


   headers = new HttpHeaders();

  private baseUrl = environment.baseUrl + '/api/rest/v1/item/';

  constructor(private http: HttpClient) {
  }

  postProductList(product): Observable<Product> {
    const headers = new HttpHeaders({ 'enctype': 'multipart/form-data' });

    return this.http.post<Product>(this.baseUrl, product, {headers: headers});
  }

  getProductList(body): Observable<Product[]> {
    return this.http.post<Product[]>(this.baseUrl + '/get', body);
  }

  updateproductList(product, id): Observable<Product> {
    const headers = new HttpHeaders({ 'enctype': 'multipart/form-data' });

    return this.http.put<Product>(this.baseUrl + id, product, {headers: headers});
  }

  deleteProduct(productId) {
    return this.http.delete(this.baseUrl + productId);
  }

  getProductById(productId) {
    return this.http.get(this.baseUrl + productId.toString());
  }

  getImage(image) {
    console.log(`${environment.baseUrl}/${image}`)
    return (`${environment.baseUrl}/${image}`);
  }
}
