import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClothesListComponent } from './clothes-list/clothes-list.component';
import { ClotheCreateComponent } from './clothe-create/clothe-create.component';

@NgModule({
  declarations: [
     ClothesListComponent,
     ClotheCreateComponent
   ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ClothesModule { }
