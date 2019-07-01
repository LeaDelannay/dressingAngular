import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
   selector: 'app-register',
   templateUrl: './register.component.html',
   styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   public form;
   public registerOk = false;

   constructor(private formBuilder: FormBuilder, private router: Router) {
      this.form = formBuilder.group({
         email: ['', [Validators.required, Validators.email]],
         password: ['', Validators.required]
      });
   }

   ngOnInit() {
   }

   register() {
      if (this.form.valid) {
         this.registerOk = true;
      }
   }

}
