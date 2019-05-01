import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
   selector: 'app-navbar',
   templateUrl: './navbar.component.html',
   styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

   constructor(public router: Router) { }

   ngOnInit() {
   }

   signOut() {
      console.log("signout clicked");
      this.router.navigate(['login']);/* Route pour changer de page */
   }

}
