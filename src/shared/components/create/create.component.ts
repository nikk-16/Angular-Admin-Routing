import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/shared/models/users.model';
import { UserserviceService } from 'src/shared/services/userservice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  userForm!: FormGroup;
  user: Array<Users> = [];
  constructor(private fb: FormBuilder, private userService: UserserviceService,private route : Router) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      lastName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      contact: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^\d+$/)]],
      age: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(3), Validators.pattern(/^\d+$/)]],
      gender: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30), Validators.email]]
    })
  }

    get firstName(){
      return this.userForm?.get('firstName');
    }

    get lastName(){
      return this.userForm?.get('lastName');
    }

    get contact(){
      return this.userForm?.get('contact');
    }

    get age(){
      return this.userForm?.get('age');
    }

    get gender(){
      return this.userForm?.get('gender');
    }

    get email(){
      return this.userForm?.get('email')
    }

  addUser() {
    if (this.userForm?.valid) {
      this.userService.addNewUser(this.userForm.value);
      this.route.navigate(['users']);
    }
    else{
      alert("Form Not Valid")
    }
  }

  showMessage(){
    if(this.userForm?.valid)
    {
      alert("User Details Saved")
    }
  }
}

