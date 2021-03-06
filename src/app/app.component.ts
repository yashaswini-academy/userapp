import { Component, OnInit } from '@angular/core';

import { UserService } from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  users = [];

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe((users) => {
        this.users = users;
      })
  }

}
