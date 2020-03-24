import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html'
})
export class DirectiveComponent {

  courseList:string[]=['TypeScript','JavaScript','Java SE'];
  enableList:boolean=true;

  constructor() { }

 hideShowList() : void{
  //this.enableList = (this.enableList == true)? false:true;
  this.enableList = !(this.enableList);
 
 }

}
