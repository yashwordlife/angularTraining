import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router : Router) {

  }
  title = 'app Demo';
  currentToDo = '';
  toDoList123 = [];
  changeTitle() {
    this.title = 'new Changed title';
  }
  addToDo() {
    this.toDoList123.push(this.currentToDo);
    this.currentToDo = '';
  }
  toDoClicked(item : string ) {
    let index = this.toDoList123.indexOf(item);
    this.toDoList123.splice(index,1);
  }
  navigate() {
    this.router.navigate(['/yash/someComponent']);
  }
}
