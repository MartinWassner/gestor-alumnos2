import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './Layouts/layouts.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialModule } from './Shared/modules/my-material.module';
import { ReactiveFormsModule } from '@angular/forms'

import { MatTableModule } from '@angular/material/table'

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        MyMaterialModule,
        BrowserModule,
        AppRoutingModule,
        LayoutsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
   
})
export class AppModule { }
