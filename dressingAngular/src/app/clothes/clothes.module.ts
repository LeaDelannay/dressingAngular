import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClothesListComponent } from './clothes-list/clothes-list.component';
import { ClotheCreateComponent } from './clothe-create/clothe-create.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ClothesListComponent, ClotheCreateComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ClothesModule { }
