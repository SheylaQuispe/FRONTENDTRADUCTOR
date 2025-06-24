import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Traduccion } from '../models/traduccion';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class TraduccionService {
  private url = `${base_url}/traducciones`;
  private listaCambio = new Subject<Traduccion[]>();

  constructor(private http: HttpClient) {}

  list() {
      return this.http.get<Traduccion[]>(this.url);
    }
  
    insert(t: Traduccion) {
      return this.http.post(this.url, t);
    }
  
    getList() {
      return this.listaCambio.asObservable();
    }
  
    setList(listaNueva: Traduccion[]) {
      this.listaCambio.next(listaNueva);
    }
    listId(id: number) {
      return this.http.get<Traduccion>(`${this.url}/${id}`);
    }
    update(t: Traduccion) {
      return this.http.put(this.url, t);
    }
      deleteA(id:number) {
      return this.http.delete(`${this.url}/${id}`);
    }
}
