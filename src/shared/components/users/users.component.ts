import { Component, OnInit } from '@angular/core';
import { Users } from 'src/shared/models/users.model';
import { UserserviceService } from 'src/shared/services/userservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  userData: Array<Users> = [];
  constructor(private userservice: UserserviceService){ }
  ngOnInit(){
    this.userData = this.userservice.UserList
  }
}
