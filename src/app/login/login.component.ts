import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorsMsg: string = "";
  emailValue: string = "";
  passValue: string = "";
  // requiredError: string = "";
  emptyEmail: boolean = false;
  emptyPass: boolean = false;
  isClick: boolean = false;

  constructor(private _AuthService: AuthService, private _Router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("userToken") != null) {
      this._Router.navigate(['/home'])
    }

    $("#pass_eye").click(function () {
      if ($("#eye").hasClass("fa-eye-slash")) {
        $("#eye").removeClass("fa-eye-slash");
        $("#eye").addClass("fa-eye");
        $("#pass").prop("type", "text");
      } else {
        $("#eye").addClass("fa-eye-slash");
        $("#eye").removeClass("fa-eye");
        $("#pass").prop("type", "password");
      }
    })
    $("#logIn_pass_eye").click(function () {
      if ($("#logIn_eye").hasClass("fa-eye-slash")) {
        $("#logIn_eye").removeClass("fa-eye-slash");
        $("#logIn_eye").addClass("fa-eye");
        $("#pass").prop("type", "text");
      } else {
        $("#logIn_eye").addClass("fa-eye-slash");
        $("#logIn_eye").removeClass("fa-eye");
        $("#pass").prop("type", "password");
      }
    })

    if (localStorage.getItem("userToken") != null) {
      this._Router.navigate(['/home'])
    }

  }

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  })

  loginSubmit(loginInfo: any): void {
    console.log("hiiii");
    $("#loginBtn").click(function () {
      // $("#loading").removeClass("d-none");
    })

    if (this.emailValue == "") {
      // alert("enter email");
      // this.requiredError = "Please enter email";
      this.emptyEmail = true;
    } else {
      this.emptyEmail = false;
    }
    if (this.passValue == "") {
      // this.requiredError = "Please enter password";
      this.emptyPass = true;
    } else {
      this.emptyPass = false;
    }


    if (this.emailValue != "" && this.passValue != "") {
      this.isClick = true;
      this._AuthService.login(loginInfo.value).subscribe((response) => {
        console.log(response);

        if (response.message == 'success') {
          if (localStorage.getItem('sendulr') != null) {
            this._Router.navigate([localStorage.getItem('sendulr')]);
            localStorage.removeItem(`sendulr`)

          } else {
            this._Router.navigate([`/home`]);
          }
          localStorage.setItem("userToken", response.token)
          this._AuthService.saveCurrentUSer()
        } else {
          this.errorsMsg = response.message;
        }
        if(response.message){
          this.isClick = false;
        }
       
      })
    }

  }


}
