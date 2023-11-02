import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/shared/models/users.model';
import { UserserviceService } from 'src/shared/services/userservice.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  userForm!: FormGroup;
  editIndex: number;
  editData!: Users;
  constructor(private activeRoute: ActivatedRoute, private fb: FormBuilder, private userService: UserserviceService,private route : Router){
    this.editIndex = this.activeRoute.snapshot.params['id'] as number
    this.editData = this.userService.UserList[this.editIndex-1];
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstName: [this.editData.firstName, [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      lastName: [this.editData.lastName, [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      contact: [this.editData.contact, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^\d+$/)]],
      age: [this.editData.age, [Validators.required, Validators.minLength(2), Validators.maxLength(3), Validators.pattern(/^\d+$/)]],
      gender: [this.editData.gender, [Validators.required]],
      email: [this.editData.email, [Validators.required, Validators.minLength(8), Validators.maxLength(30), Validators.email]]
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

  editUser() {

    if (this.userForm?.valid) {
      console.log(this.userForm.value.age);
      this.userService.editUser(this.userForm.value, this.editIndex);
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