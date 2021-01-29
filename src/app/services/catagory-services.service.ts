import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Catagory} from '../catagory-list/catagory-list.component';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatagoryServicesService {

  private baseUrl = environment.baseUrl + '/api/rest/v1/catagory/';

  constructor(private http: HttpClient) { }

  postCatagoryList(catagory): Observable<Catagory> {
    return this.http.post<Catagory>(this.baseUrl, catagory);
  }

  getCatagoryList(): Observable<Catagory[]> {
    return this.http.get<Catagory[]>(this.baseUrl);
  }

  updateCatagoryList(catagory, id): Observable<Catagory> {
    return this.http.put<Catagory>(this.baseUrl + id, catagory);
  }

  deleteCatagory(catagoryId) {
    return this.http.delete(this.baseUrl  + catagoryId);
  }

  getCatagoryById(catagoryId) {
    return this.http.get(this.baseUrl  + catagoryId.toString());
  }
}
