import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsPageComponent } from './students-page/students-page.component';
import { MyMaterialModule } from '../Shared/modules/my-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CursosComponent } from './cursos/another-page1.component';
import { AnotherPage2Component } from './inscripciones/another-page2.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { EstudianteDetalleComponent } from './estudiante-detalle/estudiante-detalle.component';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { StudentDialogComponent } from '../Shared/components/student-dialog/student-dialog.component';
import { SharedModule } from '../Shared/shared.module';



@NgModule({
  declarations: [
    StudentsPageComponent,
    CursosComponent,
    AnotherPage2Component,
    LoginPageComponent,
    EstudianteDetalleComponent,

  ],
  imports: [
    CommonModule,
    MyMaterialModule,
    ReactiveFormsModule,
    MatTableModule,
    CdkTableModule,
    SharedModule,
    
  ],
})
export class PagesModule { }
