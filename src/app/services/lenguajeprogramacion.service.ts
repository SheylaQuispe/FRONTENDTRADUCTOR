import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';
import { Lenguajeprogramacion } from '../models/lenguajeprogramacion';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class LenguajeprogramacionService {
      private url = `${base_url}/usuarios`;
  private listaCambio = new Subject<Lenguajeprogramacion[]>();

  constructor(private http: HttpClient) {}
   list() {
          return this.http.get<Lenguajeprogramacion[]>(this.url);
        }
      
        insert(l: Lenguajeprogramacion) {
          return this.http.post(this.url, l);
        }
      
        getList() {
          return this.listaCambio.asObservable();
        }
      
        setList(listaNueva: Lenguajeprogramacion[]) {
          this.listaCambio.next(listaNueva);
        }
        listId(id: number) {
          return this.http.get<Lenguajeprogramacion>(`${this.url}/${id}`);
        }
        update(l: Lenguajeprogramacion) {
          return this.http.put(this.url, l);
        }
          deleteA(id:number) {
          return this.http.delete(`${this.url}/${id}`);
        }
}
