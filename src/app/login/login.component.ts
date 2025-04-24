import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  title = "login";
  constructor(private router: Router) {}

  login(username: string, password: string) {
    if (username === "admin" && password === "123") {
      this.router.navigate(['lol']);
    } else {
      alert("Not valid.");
    }
  }
}