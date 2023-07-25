import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
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
