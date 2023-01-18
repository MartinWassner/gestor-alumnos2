import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsPageComponent } from './students-page/students-page.component';
import { MyMaterialModule } from '../Shared/modules/my-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AnotherPage1Component } from './another-page1/another-page1.component';
import { AnotherPage2Component } from './another-page2/another-page2.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { EstudianteDetalleComponent } from './estudiante-detalle/estudiante-detalle.component';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table'

import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  declarations: [
    StudentsPageComponent,
    AnotherPage1Component,
    AnotherPage2Component,
    LoginPageComponent,
    EstudianteDetalleComponent
  ],
  imports: [
    CommonModule,
    CdkTableModule,
 
    ReactiveFormsModule,
    MyMaterialModule
  ],
  exports:[MatTableModule]
})
export class PagesModule { }
