import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-clothes-list',
   templateUrl: './clothes-list.component.html',
   styleUrls: ['./clothes-list.component.css']
})
export class ClothesListComponent implements OnInit {
   clothes:any[] = [
      {"name": "clothe1", "imageUrl":"https://cdn1.iconfinder.com/data/icons/clothes-ios/64/clo-t-hanger-512.png"},
      {"name": "clothe2", "imageUrl":"https://cdn1.iconfinder.com/data/icons/clothes-ios/64/clo-t-hanger-512.png"},
      {"name": "clothe3", "imageUrl":"https://cdn1.iconfinder.com/data/icons/clothes-ios/64/clo-t-hanger-512.png"},
      {"name": "clothe4", "imageUrl":"https://cdn1.iconfinder.com/data/icons/clothes-ios/64/clo-t-hanger-512.png"},
      {"name": "clothe5", "imageUrl":"https://cdn1.iconfinder.com/data/icons/clothes-ios/64/clo-t-hanger-512.png"},
      {"name": "clothe6", "imageUrl":"https://cdn1.iconfinder.com/data/icons/clothes-ios/64/clo-t-hanger-512.png"}
   ];

   constructor() { }

   ngOnInit() {
   }

}
