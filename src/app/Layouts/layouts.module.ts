import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { SharedModule } from '../Shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { CleanLayoutComponent } from './clean-layout/clean-layout.component';

// const routes: Routes = [
//     {
//       path: '',
//       component: DashboardLayoutComponent
//     }
//   ]
  

@NgModule({
    declarations: [
        DashboardLayoutComponent,
        CleanLayoutComponent,
    ],
    exports: [
        DashboardLayoutComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule
    ]
})
export class LayoutsModule { }

// export const dashboardRouting = RouterModule.forChild(routes)
