import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainaera',
  templateUrl: './mainaera.component.html',
  styleUrls: ['./mainaera.component.css']
})
export class MainaeraComponent implements OnInit {

  firstname="Saikumar";
  currentTask;
  tasks =[
    {"name":"washing Cloths","deadline":"31022020","concern_person":"bala"},
    {"name":"Eating Food","deadline":"21052020","concern_person":"shiva"},
    {"name":"Meetingshesha ","deadline":"2306022020","concern_person":"kali"},
];
  showTask(index){
   this.currentTask=this.tasks[index];
  }

  constructor() { }

  ngOnInit() {
  }

}
