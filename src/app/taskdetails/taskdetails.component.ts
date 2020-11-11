import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-taskdetails',
  templateUrl: './taskdetails.component.html',
  styleUrls: ['./taskdetails.component.css']
})
export class TaskdetailsComponent implements OnInit {

  @Input() taskDetails;

  constructor() { }

  ngOnInit() {
  }

}
