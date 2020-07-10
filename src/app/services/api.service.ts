import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Gallery } from './gallery';

const apiUrl = 'http://localhost:3000';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public addGallery(gallery: Gallery, file: File) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('imageTitle', gallery.imageTitle);
    formData.append('imageDescription', gallery.imageDescription);
    const header = new HttpHeaders();
    const params = new HttpParams();

    const options = {
      params,
      reportProgress: true,
      headers: header,
    };
    const req = new HttpRequest('POST', apiUrl, formData, options);
    return this.http.request(req);
  }

  public getGalleryById(id: string): Observable<any> {
    const url = `${apiUrl}/gallary/${id}`;
    return this.http.get<Gallery>(url).pipe(catchError(this.handleError));
  }

  public getAllGalleryItem(): Observable<any> {
    const url = `${apiUrl}/gallary`;
    return this.http.get<Gallery>(url).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }
}
