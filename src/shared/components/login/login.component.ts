import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Login } from 'src/shared/models/users.model';
import { UserserviceService } from 'src/shared/services/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  // user!: Login;
  userForm!: FormGroup;
  user: Login = { email: '', password: '' };
  constructor(private fb: FormBuilder, private userService: UserserviceService, ){
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
    })
  }
  get email(){
    return this.userForm.get('email');
  }

  get password(){
    return this.userForm.get('password');
  }

}
