import { Injectable } from '@angular/core';
import { Users } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class ViewserviceService {

  ViewList: Array<Users> = [
    {
      userId: 1,
      firstName: 'Nikhil',
      lastName: 'C',
      contact: 8692080859,
      gender: 'Male',
      age: 22,
      email: 'nikhil.chaurasiya@gmail.com'
    }
  ]
}
