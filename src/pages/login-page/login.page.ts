import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/models/UserModel';

@Component({
  selector: 'login-page',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage {
    public user? : UserModel
    public submitted : boolean = false;
    public invalidLogin : boolean = false;


    constructor(private router : Router) {}


    public loginForm = new FormGroup({
        username: new FormControl("", [Validators.required, Validators.email]),
        password: new FormControl("", [Validators.required, Validators.minLength(8)]),
    });

    public onSubmit() {
        this.submitted = true;
        const [username, password] = [this.loginForm.controls.username.value, this.loginForm.controls.password.value];
        if (username === "selim.altayev@gmail.com" && password === "password") {
            //redirect to the home page
            this.router.navigate(['']);
        } else {
            this.invalidLogin = true
        }
    }
}
