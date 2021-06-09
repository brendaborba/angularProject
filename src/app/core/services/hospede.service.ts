import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hospede } from 'src/app/shared/models/hospedes.model';

@Injectable({
  providedIn: 'root'
})


export class HospedeService {
  private readonly baseUrl: string;
  constructor(
    @Inject('BASE_URL') baseUrl: string,
    private http: HttpClient) {
    this.baseUrl = baseUrl;
  }

  getAll(): Observable<Hospede[]> {
    return this.http.get<Hospede[]>(`${this.baseUrl}/hospede`);
  }

  update(hospede: Hospede): Observable<Hospede> {
    return this.http.put<Hospede>(`${this.baseUrl}/hospede`, hospede);
  }

  add(hospede: Hospede): Observable<any> {
    return this.http.post<Hospede>(`${this.baseUrl}/hospede`, hospede);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/hospede/${id}`);
  }
}
