import { Injectable } from '@angular/core';
import {CLIENTS} from '../models/client.json';
import { Client } from '../models/client.js';
import{ Observable,of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  getClients():Observable<Client[]>{
    return of(CLIENTS);
  }
}
