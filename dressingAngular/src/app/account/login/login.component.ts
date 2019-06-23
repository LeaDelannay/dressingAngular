import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   public form;

   constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
      this.form = formBuilder.group({
         email: ['', [Validators.required, Validators.email]],
         password: ['', Validators.required]
      });
   }

   ngOnInit() {
   }

   login() {
      if (this.form.valid) {
        this.authService.sendToken(this.form.value.email)
        this.router.navigate(["homepage"]);
      }
    }
}
