import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Suscripcion } from '../models/suscripcion';
<<<<<<< HEAD

const base_url = environment.base;
=======
const base_url=environment.base
>>>>>>> 89310e524723779633d3ce0714fe52a7430af110
@Injectable({
  providedIn: 'root'
})
export class SuscripcionService {
<<<<<<< HEAD
    private url = `${base_url}/usuarios`;
  private listaCambio = new Subject<Suscripcion[]>();

  constructor(private http: HttpClient) {}
  
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
      deleteA(id:number) {
      return this.http.delete(`${this.url}/${id}`);
    }
=======
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

>>>>>>> 89310e524723779633d3ce0714fe52a7430af110
}
