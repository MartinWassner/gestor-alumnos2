import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ToolbarComponent } from './Shared/toolbar/toolbar.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { LayoutsModule } from './Layouts/layouts.module';
import { DashboardLayoutComponent } from './Layouts/dashboard-layout/dashboard-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageWrapperComponent } from './Shared/page-wrapper/page-wrapper.component';
import { StudentsPageComponent } from './Pages/students-page/students-page.component';


@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        NavbarComponent,
        DashboardLayoutComponent,
        PageWrapperComponent,
        StudentsPageComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LayoutsModule,
        BrowserAnimationsModule,
    ]
})
export class AppModule { }
