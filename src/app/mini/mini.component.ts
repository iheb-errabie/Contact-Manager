import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini',
  templateUrl: './mini.component.html',
  styleUrls: ['./mini.component.css']
})
export class MiniComponent implements OnInit {
  user: string = "Hi Walid";
  imgAltText="test"
  constructor() { }
  ngOnInit(): void {
  }
  getUser():string{
  return this.user;
  }
  }