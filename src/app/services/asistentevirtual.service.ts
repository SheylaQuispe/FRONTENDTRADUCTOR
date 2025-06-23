import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';
import { Asistentevirtual } from '../models/asistentevirtual';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class AsistentevirtualService {
    private url = `${base_url}/usuarios`;
  private listaCambio = new Subject<Asistentevirtual[]>();

  constructor(private http: HttpClient) {}

      list() {
          return this.http.get<Asistentevirtual[]>(this.url);
        }
      
        insert(av: Asistentevirtual) {
          return this.http.post(this.url, av);
        }
      
        getList() {
          return this.listaCambio.asObservable();
        }
      
        setList(listaNueva: Asistentevirtual[]) {
          this.listaCambio.next(listaNueva);
        }
        listId(id: number) {
          return this.http.get<Asistentevirtual>(`${this.url}/${id}`);
        }
        update(av: Asistentevirtual) {
          return this.http.put(this.url, av);
        }
          deleteA(id:number) {
          return this.http.delete(`${this.url}/${id}`);
        }
}
