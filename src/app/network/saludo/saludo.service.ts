import { Injectable } from '@angular/core';

/* Http */
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';

/* RxJs */
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';

/* Constants */
import { SYMBOLS, NUMERICAL_VALUES, PRINCIPAL_HEADER } from 'src/app/utils/Constants';
import { environment } from 'src/environments/environment';

/* Dto y demás datos */
import { SaludoDto } from 'src/app/data/dto/SaludoResponseDto';

@Injectable({
  providedIn: 'root'
})
export class SaludoService {

  private baseUrl = environment.baseUrl;
  private msSaludo = environment.msPath.saludo;
  private numerialValues = NUMERICAL_VALUES;
  private jeder = new HttpHeaders().set('Access-Control-Allow-Origin', '*')

  constructor(private http: HttpClient) { }

  public getSaludo(): Observable<HttpResponse<SaludoDto>>{
    return this.http.get<SaludoDto>(this.baseUrl + this.msSaludo, {
      headers: PRINCIPAL_HEADER,
      observe: 'response'
    }).pipe(
      timeout(this.numerialValues.TIME_OUT)
    );
  }
}
