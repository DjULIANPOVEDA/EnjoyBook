import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Libro, LibroWithUser } from '../models/Libro';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Reporte } from '../models/Reporte';

@Injectable({
  providedIn: 'root',
})
export class LibroService {
  constructor(private http: HttpClient, private cookieService: CookieService) {}
  private apiUrl: string = environment.api;

  getInventarioLibros(): Observable<LibroWithUser[]> {
    const token = this.cookieService.get('Token');
    return this.http.get<LibroWithUser[]>(`${this.apiUrl}/Libro/all`, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    });
  }

  getAllLibros(): Observable<Libro[]> {
    return this.http.get<Libro[]>(`${this.apiUrl}/Libro`);
  }
  getLibrosByUser(): Observable<Libro[]> {
    const token = this.cookieService.get('Token');
    return this.http.get<Libro[]>(`${this.apiUrl}/Libro/Usuario`, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    });
  }

  comprarLibro(libroId: string): Observable<boolean> {
    const token = this.cookieService.get('Token');
    return this.http.post<boolean>(
      `${this.apiUrl}/Libro/Comprar/${libroId}`,
      undefined,
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      }
    );
  }
  alquilarLibro(libroId: string, diasRenta: number): Observable<boolean> {
    const token = this.cookieService.get('Token');
    return this.http.post<boolean>(
      `${this.apiUrl}/Libro/Alquilar`,
      {
        libroId,
        diasRenta,
      },
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      }
    );
  }

  registrarLibro(libro: Libro): Observable<boolean> {
    const token = this.cookieService.get('Token');
    return this.http.post<boolean>(`${this.apiUrl}/Libro`, libro, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    });
  }

  reporte(): Observable<Reporte> {
    const token = this.cookieService.get('Token');
    return this.http.get<Reporte>(`${this.apiUrl}/Libro/Reporte`, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    });
  }
}
