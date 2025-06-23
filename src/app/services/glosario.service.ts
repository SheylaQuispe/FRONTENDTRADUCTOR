import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';
import { Glosario } from '../models/glosario';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class GlosarioService {
  private url = `${base_url}/usuarios`;
  private listaCambio = new Subject<Glosario[]>();

  constructor(private http: HttpClient) {}

   list() {
          return this.http.get<Glosario[]>(this.url);
        }
      
        insert(g: Glosario) {
          return this.http.post(this.url, g);
        }
      
        getList() {
          return this.listaCambio.asObservable();
        }
      
        setList(listaNueva: Glosario[]) {
          this.listaCambio.next(listaNueva);
        }
        listId(id: number) {
          return this.http.get<Glosario>(`${this.url}/${id}`);
        }
        update(g: Glosario) {
          return this.http.put(this.url, g);
        }
          deleteA(id:number) {
          return this.http.delete(`${this.url}/${id}`);
        }
}
