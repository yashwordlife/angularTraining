import { DataServiceService } from './../data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'joseph',
  templateUrl: './joseph.component.html',
  styleUrls: ['./joseph.component.css']
})
export class JosephComponent implements OnInit {
  public verb : string;
  constructor(private dataServiceService : DataServiceService) { }

  ngOnInit() {
    this.verb = this.dataServiceService.someData;
  }

}
