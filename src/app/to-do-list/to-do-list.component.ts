import { DataServiceService } from './../data-service.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  @Input() toDoList : any = [];
  @Output() itemClicked : EventEmitter<any> = new EventEmitter();
  public verb : string;
  constructor( private dataServiceService : DataServiceService, 
  private http : HttpClient
  ) { }

  ngOnInit() {
  }
  itemHasBeenClicked(item : any) {
    this.itemClicked.emit(item);
  }
  saveData() {
    this.http.get('https://jsonplaceholder.typicode.com/posts/'+ this.verb)
    .subscribe(
      data => this.requestCompleted(data)
    );
  }
  requestCompleted(data : any) {
    console.log(data);
    this.dataServiceService.someData = data;

  }
}
