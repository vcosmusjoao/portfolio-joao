import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { }
  private jsonFileUrl = 'assets/projects/last-projects.json';

  getUltimosProjetos() : Observable<any> {
    return this.http.get(this.jsonFileUrl); 
  }
}
