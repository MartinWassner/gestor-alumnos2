import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
    usernameControl = new FormControl('')
    passwordControl = new FormControl('')
    loginForm = new FormGroup({
      username: this.usernameControl,
      password: this.passwordControl
    })
  dialogRef: any;

    close(){
      this.dialogRef.close
    }
}
