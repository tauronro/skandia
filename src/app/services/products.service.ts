import { Injectable, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment.development';
import { ListCard } from '../shared/interfaces/products.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private http: HttpClient = inject(HttpClient);

  constructor() { }

  getAll(){
    this.http.get<ListCard>(`${environment.apiUrl}test-front-end-skandia/cards`)
  }
}
