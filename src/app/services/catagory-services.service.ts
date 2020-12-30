import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Catagory} from '../catagory-list/catagory-list.component';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatagoryServicesService {

  private baseUrl = environment.baseUrl + '/api/rest/v1/catagory/';

  constructor(private http: HttpClient) { }

  postCatagoryList(catagory) {
    return this.http.post(this.baseUrl, catagory);
  }

  getCatagoryList(): Observable<Catagory[]> {
    return this.http.get<Catagory[]>(this.baseUrl);
  }

  updateCatagoryList(catagory) {
    return this.http.put(this.baseUrl + '/' + catagory.id, catagory);
  }

  deleteCatagory(catagoryId: number) {
    return this.http.delete(catagoryId.toString());
  }

  getCatagoryById(catagoryId) {
    return this.http.get(this.baseUrl + '/' + catagoryId.toString());
  }
}
