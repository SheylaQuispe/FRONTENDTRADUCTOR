import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Feedback } from '../models/feedback';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

 private url = `${base_url}/usuarios`;
  private listaCambio = new Subject<Feedback[]>();

  constructor(private http: HttpClient) {}

   list() {
          return this.http.get<Feedback[]>(this.url);
        }
      
        insert(f: Feedback) {
          return this.http.post(this.url, f);
        }
      
        getList() {
          return this.listaCambio.asObservable();
        }
      
        setList(listaNueva: Feedback[]) {
          this.listaCambio.next(listaNueva);
        }
        listId(id: number) {
          return this.http.get<Feedback>(`${this.url}/${id}`);
        }
        update(f: Feedback) {
          return this.http.put(this.url, f);
        }
          deleteA(id:number) {
          return this.http.delete(`${this.url}/${id}`);
        }
}
