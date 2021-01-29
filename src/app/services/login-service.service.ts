import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  baseUrl = environment.baseUrl + '/api/rest/v1/user/login';
  constructor(private httpClient: HttpClient) { }

login(user) {
  return this.httpClient.post(this.baseUrl , user);
}
}
