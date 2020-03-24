import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Bienvenido a Angular';
  course:string='Angular con Spring5';
  teacher:string='Heysi Despa';
}
