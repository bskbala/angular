import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainarea',
  templateUrl: './mainarea.component.html',
  styleUrls: ['./mainarea.component.css']
})
export class MainareaComponent implements OnInit {

  firstname = "SAIKUMAR";
  currentTask;
  tasks = [
          {"Name":"Eating Food ","deadline":"30022020","concern_person":"Bandiwala"},
          {"Name":"Boccing Class","deadline":"30022020","concern_person":"Baskar"},
          {"Name":"Boccing Class","deadline":"30022020","concern_person":"Baskar"},
          {"Name":"Boccing Class","deadline":"30022020","concern_person":"Baskar"},
          {"Name":"Boccing Class","deadline":"30022020","concern_person":"Baskar"},
          
  showTask(index){
    this.currentTask = this.tasks[index];
  }
  constructor() { }

  ngOnInit() {
  }

}
