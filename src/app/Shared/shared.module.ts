import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';



@NgModule({
  declarations: [
    //NavbarComponent,
    //ToolbarComponent,
    //PageWrapperComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports: [
    //NavbarComponent,
    //ToolbarComponent
  ]
})
export class SharedModule { }
