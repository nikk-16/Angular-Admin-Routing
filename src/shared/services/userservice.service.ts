import { Injectable } from '@angular/core';
import { Users } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  UserList: Array<Users> = [
    {
      userId: 1,
      firstName: 'Nikhil',
      lastName: 'Chaurasiya',
      contact: 8948141191,
      gender: 'Male',
      age: 22,
      email: 'nikhil.chaurasiya@chubb.com'
    }
  ]

  addNewUser(newUser: Users){
    newUser.userId = this.UserList.length + 1;
    this.UserList.push(newUser)
  }
  editUser(user: Users, id: number){
    const userData = user as Users;
    userData.userId = id;
    this.UserList = this.UserList.filter((users) => {
      users.userId !== id;
      console.log();
    });
    this.UserList.push(user);
  }
}