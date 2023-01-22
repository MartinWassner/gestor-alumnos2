import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';
import { StudentDialogComponent } from './components/student-dialog/student-dialog.component';
import { MyMaterialModule } from './modules/my-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PagesModule } from '../Pages/pages.module';


@NgModule({
  declarations: [
    NavbarComponent,
    ToolbarComponent,
    PageWrapperComponent,  
    StudentDialogComponent,
  ],
  imports: [
    CommonModule,
    MyMaterialModule,
    ReactiveFormsModule,
    RouterModule
    
  ],
  exports: [
    NavbarComponent,
    ToolbarComponent,
    PageWrapperComponent,  
    StudentDialogComponent,
    MyMaterialModule,
  ]
})
export class SharedModule { }
