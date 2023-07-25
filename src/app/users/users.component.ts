import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  signupUsers: any[] = []; 
  signupObj:any={
    username:'', 
    email:'',
    password:''
  };
  loginObj:any={
    email:'', 
    password:''
  };
  onSignUp(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
  }
  onLogin(){

  }
  constructor(){}
  ngOnInit(): void {
    
  }
}
