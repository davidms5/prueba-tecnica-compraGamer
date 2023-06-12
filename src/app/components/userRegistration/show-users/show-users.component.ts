import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/interfaces/structureDataEcommerce';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.scss']
})
export class ShowUsersComponent implements OnInit{
  users: Client[];

  constructor(){
    this.users = [];
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    const storedUsers = localStorage.getItem('user');
    this.users = storedUsers ? JSON.parse(storedUsers) : [];
  }
}
