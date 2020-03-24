import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './components/clients/clients.component';
import { DirectiveComponent } from './components/directive/directive.component';


const routes: Routes = [ 
  { path: 'clients', component: ClientsComponent},
  { path: 'directives', component: DirectiveComponent },
  { path: '', pathMatch:'full', redirectTo: '/clients'},
  { path: '**', pathMatch:'full', redirectTo: '/clients'},
  //{ path: 'artist/:id', component: ArtistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
