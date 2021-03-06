import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  client:Client=new Client();

  title:String="Crear cliente";
  errors:string[];

  constructor(private clientService:ClientService,
    private router : Router,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.getClient();
  }

  getClient():void{
    this.activatedRoute.params.subscribe(params=>{
      let id = params['id']
      if(id){
        this.clientService.getClient(id).subscribe((client)=>
        this.client = client)
      }
    }) 
  }
  create():void{
    //console.log(this.client);
    this.clientService.create(this.client).subscribe(
      client=>{
        this.router.navigate(['/clients'])
        swal.fire('Nuevo cliente', 
        `Cliente ${client.name} 
        ha sido creado con éxito`,
        'success');
     },err=>{
       this.errors=err.error.errors as string[];
       console.error('Codigo de error del backend: '+ err.status);
       console.error(err.error.errors);
     }
      )
  }

  update():void{
    this.clientService.update(this.client).subscribe(
      json=>{
        this.router.navigate(['/clients'])
        swal.fire('Cliente actualizado', 
        `${json.message} : ${json.client.name} 
        `,
        'success');
     },err=>{
      this.errors=err.error.errors as string[];
      console.error('Codigo de error del backend: '+ err.status);
      console.error(err.error.errors);
    } )
  }


}
