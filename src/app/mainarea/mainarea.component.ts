import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainarea',
  templateUrl: './mainarea.component.html',
  styleUrls: ['./mainarea.component.css']
})
export class MainareaComponent implements OnInit {

  firstname = "SAIKUMAR";
  tasks = ["playying","running","kicking","Stunting"];

  constructor() { }

  ngOnInit() {
  }

}
