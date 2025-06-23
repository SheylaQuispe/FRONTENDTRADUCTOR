import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';
import { Users } from '../models/users';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})

export class UsersService {
  private url = `${base_url}/usuarios`;
  private listaCambio = new Subject<Users[]>();

  constructor(private h: HttpClient) {}

  list() {
    return this.h.get<Users[]>(this.url);
  }

  insert(u: Users) {
    return this.h.post(this.url, u);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  setList(listaNueva: Users[]) {
    this.listaCambio.next(listaNueva);
  }
  listId(id: number) {
    return this.h.get<Users>(`${this.url}/${id}`);
  }
  update(u: Users) {
    return this.h.put(this.url, u);
  }
    deleteA(id:number) {
    return this.h.delete(`${this.url}/${id}`);
  }
}
