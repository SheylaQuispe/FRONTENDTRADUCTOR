//Este servicio maneja las operaciones CRUD para el modelo Compartir.
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Compartir } from '../models/compartir';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// Importa las dependencias necesarias y define la URL base para las peticiones HTTP.
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})

//Exportas las clases para que puedan ser utilizadas en otros componentes.
export class CompartirService {
  private url = `${base_url}/usuarios`;
  private listaCambio = new Subject<Compartir[]>();


//Full CRUD con su CONSTRUCTOR
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
