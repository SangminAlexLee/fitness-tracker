import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  maxDate: Date;
  constructor() {
    this.maxDate = new Date();
  }

  ngOnInit(): void {
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 1);

  }

  onSubmit(form: NgForm ) {
    console.log(form);
  }
}
