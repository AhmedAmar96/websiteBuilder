import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errors: string = "";
  passVal: any = "";
  rePassVal: any = "";
  // conMesg:string="";
  isConfirm: boolean = false;
  isClick: boolean = false;

  constructor(private _AuthService: AuthService, private _Router: Router) { }

  ngOnInit(): void {

    $("#reg_pass_eye").click(function () {
      console.log("eye done");
      
      if ($("#reg_eye").hasClass("fa-eye-slash")) {
        $("#reg_eye").removeClass("fa-eye-slash");
        $("#reg_eye").addClass("fa-eye");
        $("#pass").prop("type", "text");
        $("#re_pass").prop("type", "text");
      } else {
        $("#reg_eye").addClass("fa-eye-slash");
        $("#reg_eye").removeClass("fa-eye");
        $("#pass").prop("type", "password");
        $("#re_pass").prop("type", "password");
      }
    })

    if(localStorage.getItem("userToken") != null){
      this._Router.navigate(['/home'])
    }

    $("#pass, #re_pass").keyup(() => {
      if (this.rePassVal === this.passVal) {
        // alert("tmam")
        // this.conMesg = "*The password you entered does not match";
        this.isConfirm = true;
      } else {
        // alert("mesh tmam")
        this.isConfirm = false;
      }
    })

    
  }

  registForm = new FormGroup({
    first_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    last_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    age: new FormControl(null, [Validators.required, Validators.min(12), Validators.max(90)]),
    password: new FormControl(null, [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$')]),
    re_password: new FormControl(null, [Validators.required]),
    checkbox: new FormControl(null, [Validators.required])
  })

  regSubmit(registerInfo: any): void {
    console.log("ssssss");
    
    this.isClick = true;
    this._AuthService.register(registerInfo.value).subscribe((response) => {
      console.log(response);
      if (response.message == 'success') {
        //tamam
        this._Router.navigate(['/login'])
      } else {
        //feh moshkela
        this.isClick = false;
        this.errors = response.errors.email.message;
      }
    })
  }

}
