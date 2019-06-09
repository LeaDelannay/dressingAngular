import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClothesListComponent } from './clothes-list/clothes-list.component';
import { ClotheDetailComponent } from './clothe-detail/clothe-detail.component';
import { ClotheCreateComponent } from './clothe-create/clothe-create.component';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  declarations: [
     ClothesListComponent,
     ClotheDetailComponent,
     ClotheCreateComponent
   ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    FileUploadModule
  ],
  exports: [
   ClothesListComponent,
   ClotheCreateComponent
  ],
  entryComponents: [
     ClotheDetailComponent //permet de charger le contenu de ClotheDetailComponent dans la modale de ClothesListComponent
   ],
})
export class ClothesModule { }
