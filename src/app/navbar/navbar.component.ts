import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogin: boolean = false;

  user: any = "";

  fNameVal: any = "";
  lNameVal: any = "";
  constructor(private _AuthService: AuthService) {}

  ngOnInit(): void {
    this._AuthService.currentUser.subscribe(() => {

      console.log(this._AuthService.currentUser.getValue())
      if (this._AuthService.currentUser.getValue() != null) {
        this.isLogin = true;

        this.user=this._AuthService.currentUser

        console.log( this.user=this._AuthService.currentUser);

      } else {
        this.isLogin = false
      }
    })

  }
  logOut() {
    this._AuthService.logOut();
  }


  sendulr(navigation:any)
  {
    localStorage.setItem('sendulr', navigation)
  }
}
