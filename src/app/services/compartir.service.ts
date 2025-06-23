import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Compartir } from '../models/compartir';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class CompartirService {
private url = `${base_url}/usuarios`;
  private listaCambio = new Subject<Compartir[]>();

  constructor(private http: HttpClient) {}

  list() {
          return this.http.get<Compartir[]>(this.url);
        }
      
        insert(c: Compartir) {
          return this.http.post(this.url, c);
        }
      
        getList() {
          return this.listaCambio.asObservable();
        }
      
        setList(listaNueva: Compartir[]) {
          this.listaCambio.next(listaNueva);
        }
        listId(id: number) {
          return this.http.get<Compartir>(`${this.url}/${id}`);
        }
        update(c: Compartir) {
          return this.http.put(this.url, c);
        }
          deleteA(id:number) {
          return this.http.delete(`${this.url}/${id}`);
        }
}
