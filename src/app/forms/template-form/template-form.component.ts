import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  public data: any = {};

  constructor() { }

  ngOnInit() {
  }

  public saveData($event, form) {
    $event.preventDefault();
    console.log(form);
    console.log(form.value);
  }

}
