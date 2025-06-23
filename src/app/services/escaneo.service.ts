import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';
import { Escaneo } from '../models/escaneo';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class EscaneoService {
 private url = `${base_url}/usuarios`;
  private listaCambio = new Subject<Escaneo[]>();

  constructor(private http: HttpClient) {}

     list() {
          return this.http.get<Escaneo[]>(this.url);
        }
      
        insert(e: Escaneo) {
          return this.http.post(this.url, e);
        }
      
        getList() {
          return this.listaCambio.asObservable();
        }
      
        setList(listaNueva: Escaneo[]) {
          this.listaCambio.next(listaNueva);
        }
        listId(id: number) {
          return this.http.get<Escaneo>(`${this.url}/${id}`);
        }
        update(e: Escaneo) {
          return this.http.put(this.url, e);
        }
          deleteA(id:number) {
          return this.http.delete(`${this.url}/${id}`);
        }
}
