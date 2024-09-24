import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { IOperationResponse } from './interfaces/operation-response.interface';
import { take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  searchTerm: string = '';
  users: IOperationResponse[] = [];

  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.userService.getUsers()
    .pipe(take(1))
    .subscribe((data => {
      this.users = data
    }))
  }
}
