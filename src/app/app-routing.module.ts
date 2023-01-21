import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './Layouts/dashboard-layout/dashboard-layout.component';
import { StudentsPageComponent } from './Pages/students-page/students-page.component';
import { CursosComponent } from './Pages/cursos/another-page1.component';
import { AnotherPage2Component } from './Pages/inscripciones/another-page2.component';
import { CleanLayoutComponent } from './Layouts/clean-layout/clean-layout.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { EstudianteDetalleComponent } from './Pages/estudiante-detalle/estudiante-detalle.component';


const routes: Routes = [
  {
    path: '',
    component: CleanLayoutComponent,
    children: [
        {
          path: 'login',
          component: LoginPageComponent,
        },
        // {
        //   path: '**',
        //   redirectTo: 'login'
        // },
        {
          path: 'xd',
          redirectTo: 'dashboard'
          
        }
      ]
    },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'estudiantes',
        component: StudentsPageComponent
      },
      {
        path: 'estudiantes/:id',
        component: EstudianteDetalleComponent
      },
      {
        path: 'another-page1',
        component:CursosComponent
      },
      {
        path: 'another-page2',
        component: AnotherPage2Component
      },
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
