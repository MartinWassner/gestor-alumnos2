import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './Layouts/layouts.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentsPageComponent } from './Pages/students-page/students-page.component';
import { MyMaterialModule } from './Shared/modules/my-material.module';
import { ReactiveFormsModule } from '@angular/forms'



@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LayoutsModule,
        BrowserAnimationsModule,
        MyMaterialModule,
        ReactiveFormsModule,
        AppRoutingModule
    ]
})
export class AppModule { }
