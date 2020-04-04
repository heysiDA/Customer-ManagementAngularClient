import { Injectable } from '@angular/core';
import {CLIENTS} from '../models/client.json';
import { Client } from '../models/client.js';
import{ Observable,of,throwError} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map,catchError} from 'rxjs/operators';
import swal from 'sweetalert2';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  url:string='http://localhost:8080/api/clients';
  
  constructor(private http:HttpClient, private router : Router) { }
  
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
      map(response => response as Client),
      catchError(e=>{
        this.router.navigate(['/clients']);
        console.error(e.error.message);
        swal.fire('Error al editar',e.error.message,'error');
        return throwError(e);
      })
    );
  }

  create(client: Client):Observable<Client>{
    return this.http.post(this.url,client,{headers:this.httpHeaders}).pipe(
      map((response:any )=> response.client as Client),
      catchError(e=>{
        console.error(e.error.message);
        swal.fire(e.error.message,e.error.error,'error');
        return throwError(e);
      })
    );
  }

  //other way
  update(client: Client):Observable<any>{
    return this.http.put(`${this.url}/${client.id}`,client,{headers:this.httpHeaders}).pipe(
      map(response=> response as any),
      catchError(e=>{
        console.error(e.error.message);
        swal.fire(e.error.message,e.error.error,'error');
        return throwError(e);
      })
    );
  }

  delete(id:number):Observable<Client>{
    return this.http.delete(`${this.url}/${id}`,{headers:this.httpHeaders}).pipe(
      map((response:any )=> response.client as Client),
      catchError(e=>{
        console.error(e.error.message);
        swal.fire(e.error.message,e.error.error,'error');
        return throwError(e);
      })
    );
  }

}
