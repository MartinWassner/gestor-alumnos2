import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsPageComponent } from './students-page/students-page.component';
import { MyMaterialModule } from '../Shared/modules/my-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AnotherPage1Component } from './another-page1/another-page1.component';
import { AnotherPage2Component } from './another-page2/another-page2.component';
import { LoginPageComponent } from './login-page/login-page.component';



@NgModule({
  declarations: [
    StudentsPageComponent,
    AnotherPage1Component,
    AnotherPage2Component,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    MyMaterialModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }