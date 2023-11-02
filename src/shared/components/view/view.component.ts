import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from 'src/shared/models/users.model';
import { UserserviceService } from 'src/shared/services/userservice.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  viewIndex: number;
  viewdata!: Users;
  constructor(private activeRoute: ActivatedRoute, private userService: UserserviceService){
    this.viewIndex = this.activeRoute.snapshot.params['id']
    this.viewdata = this.userService.UserList[this.viewIndex-1]
  }
}
