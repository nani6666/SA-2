import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { BasicTablesComponent } from './basic-tables/basic-tables.component';
import { DynamicTablesComponent } from './dynamic-tables/dynamic-tables.component';

export const routes = [
  { path: '', redirectTo: 'basic-tables', pathMatch: 'full'},
  { path: 'basic-tables', component: BasicTablesComponent, data: { breadcrumb: 'Basic' } },
  { path: 'dynamic-tables', component: DynamicTablesComponent, data: { breadcrumb: 'Dynamic' } }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxDatatableModule,
    DirectivesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    BasicTablesComponent,
    DynamicTablesComponent
  ]
})
export class TablesModule { }
