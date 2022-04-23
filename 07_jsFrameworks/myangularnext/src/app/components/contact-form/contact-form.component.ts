import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  get myName(): string {
    return this._myName;
  }

  set myName(value: string) {
    this._myName = value;
  }

  private _myName: string

  // string myName {get;set;}

  constructor() {
    this._myName = "Vasya"
  }

  ngOnInit(): void {
  }

}
