import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Suscripcion } from '../models/suscripcion';
const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class SuscripcionService {
private url=`${base_url}/suscripciones`;

  constructor(private http:HttpClient) { }

  private listaCambio = new Subject<Suscripcion[]>();

  list() {
    return this.http.get<Suscripcion[]>(this.url);
  }

  insert(s: Suscripcion) {
    return this.http.post(this.url, s);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  setList(listaNueva: Suscripcion[]) {
    this.listaCambio.next(listaNueva);
  }

  listId(id: number) {
    return this.http.get<Suscripcion>(`${this.url}/${id}`);
  }

  update(s: Suscripcion) {
    return this.http.put(this.url, s);
  }

  deleteS(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

}
