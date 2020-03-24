import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html'
  
})
export class ClientsComponent implements OnInit {

  clients:Client[];
  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
    this.clientService.getClients().subscribe(clients=>{
      this.clients = clients;
      //console.log(client);
    });
  }

  delete(client: Client):void{
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que desea eliminar el cliente ${client.name} ${client.lastName}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.clientService.delete(client.id).subscribe(
          response=>{ 
          this.clients = this.clients.filter(cli=>
          cli !== client) 

          swalWithBootstrapButtons.fire(
            '¡Cliente eliminado!',
            `Cliente ${client.name} eliminado con éxito`,
            'success'
          )
        });
        
      } 
    })
  }

}
