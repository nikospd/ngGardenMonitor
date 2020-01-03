import {Component, OnInit} from '@angular/core';
import { first } from 'rxjs/operators';

// import { User } from '../_models';
// import { UserService } from '../_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
  loading = false;
  // users: User[];
  constructor() { }
  ngOnInit(): void {
  }

  // constructor(private userService: UserService) { }
  //
  // ngOnInit() {
  //   this.loading = true;
  //   this.userService.getAll().pipe(first()).subscribe(users => {
  //     this.loading = false;
  //     this.users = users;
  //   });
  // }
}
