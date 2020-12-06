import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm , Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(fb: FormBuilder ) { 
    this.loginForm = fb.group({
      title: fb.control('initial value', Validators.required)
  });
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', {validators: [Validators.required, Validators.email ]}),
      password: new FormControl('', {validators:[Validators.required]})

    });
  }

  onSubmit(form: NgForm) {
    // console.log(form); 
  }

}
