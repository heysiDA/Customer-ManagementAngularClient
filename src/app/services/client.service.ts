import { Injectable } from '@angular/core';
import {CLIENTS} from '../models/client.json';
import { Client } from '../models/client.js';
import{ Observable,of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  url:string='http://localhost:8080/api/clients';
  constructor(private http:HttpClient) { }

  getClients():Observable<Client[]>{
    //return of(CLIENTS);
    //return this.http.get<Client[]>(this.url);
      return this.http.get(this.url).pipe(
      map(response => response as Client[])
    );
  }
}
