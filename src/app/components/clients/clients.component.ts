import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html'
  
})
export class ClientsComponent implements OnInit {

  clients:Client[];
  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
    this.clientService.getClients().subscribe(cliente=>{
      this.clients = cliente;
    });
  }

}
