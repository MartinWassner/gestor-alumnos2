import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { NavbarComponent } from '../Shared/navbar/navbar.component';
import { ToolbarComponent } from '../Shared/toolbar/toolbar.component';
import { SharedModule } from '../Shared/shared.module';



@NgModule({
  declarations: [
    //DashboardLayoutComponent,
    
  ],
  imports: [
    CommonModule,   
    SharedModule
  ],
  exports: [
    //DashboardLayoutComponent,
    
  ]
})
export class LayoutsModule { }
