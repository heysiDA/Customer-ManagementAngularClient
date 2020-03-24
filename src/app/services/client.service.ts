import { Injectable } from '@angular/core';
import {CLIENTS} from '../models/client.json';
import { Client } from '../models/client.js';
import{ Observable,of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  url:string='http://localhost:8080/api/clients';
  
  constructor(private http:HttpClient) { }
  
  httpHeaders=new HttpHeaders();

  getClients():Observable<Client[]>{
    //return of(CLIENTS);
    //return this.http.get<Client[]>(this.url);
      return this.http.get(this.url).pipe(
      map(response => response as Client[])
    );
  }

  getClient( id ):Observable<Client>{    
      return this.http.get(`${this.url}/${id}`).pipe(
      map(response => response as Client)
    );
  }

  create(client: Client):Observable<Client>{
    return this.http.post(this.url,client,{headers:this.httpHeaders}).pipe(
      map(response => response as Client)
    );
  }

  update(client: Client):Observable<Client>{
    return this.http.put(`${this.url}/${client.id}`,client,{headers:this.httpHeaders}).pipe(
      map(response => response as Client)
    );
  }

  delete(id:number):Observable<Client>{
    return this.http.delete(`${this.url}/${id}`,{headers:this.httpHeaders}).pipe(
      map(response => response as Client)
    );
  }

}
