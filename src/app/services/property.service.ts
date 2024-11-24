import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Property } from '../interfaces/Property';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  constructor() {}
  private apiUrl = 'http://127.0.0.1:8000/api/properties/';
  http = inject(HttpClient);

  private handleError(error: any) {
    console.log(error);
    return throwError(() => new Error('Something went wrong.'));
  }
  getProperties() {
    return this.http
      .get<Property[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }
  getProperty(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  getPropertiesWithParams(query: string) {
    let params = new HttpParams().set('q', query);
    return this.http.get<Property[]>(this.apiUrl, { params });
  }
  createProperty(post: any) {
    return this.http.post(this.apiUrl, httpOptions);
  }
}
