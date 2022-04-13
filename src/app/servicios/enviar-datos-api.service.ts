import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EnviarDatosApiService {
  //URL = 'http://192.168.1.20:5000/guardardatos';
  URL = 'https://api-correo.herokuapp.com/guardardatos';

  constructor(private http: HttpClient) {}

  enviarDatos(cuenta: any): Observable<any> {
    return this.http.post<any>(this.URL, cuenta);
  }
  obtenerIp() : Observable<any>{
    return this.http.get<any>('https://api.ipify.org/?format=json');
  }
}


