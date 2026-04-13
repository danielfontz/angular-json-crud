import { Injectable } from '@angular/core';
import { Customer } from '../types/types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private apiUrl = 'http://localhost:3000/customers';

  constructor(private http: HttpClient) { }
  list(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl);
  }
}
