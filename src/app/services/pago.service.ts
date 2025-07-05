import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pago } from '../models/pago';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { PagoRecaudacionDto } from '../models/PagoRecaudacionDto';
import { PagoMetodoDto } from '../models/pagometodoDto';

const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class PagoService {
fechaPago: Date = new Date(); 
private url = `${base_url}/pagos`;
private listaCambio = new Subject<Pago[]>();
  
constructor(private http: HttpClient) {}

  list(){
    return this.http.get<Pago[]>(this.url);
  }

  insert(p: Pago) {
    return this.http.post(this.url, p);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  setList(listaNueva: Pago[]) {
    this.listaCambio.next(listaNueva);
  }
  listId(id: number) {
    return this.http.get<Pago>(`${this.url}/${id}`);
  }

  update(p: Pago) {
    return this.http.put(this.url, p);
  }
  deleteA(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  getSum(fecha: string): Observable<PagoRecaudacionDto[]> {
    return this.http.get<PagoRecaudacionDto[]>(`${this.url}/recaudaciones/${fecha}`);
  }
  getSumMetodo(): Observable<PagoMetodoDto[]> {
    return this.http.get<PagoMetodoDto[]>(`${this.url}/metodos`);
  }
}
