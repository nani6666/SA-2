import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PagesComponent } from './pages.component';
import { BlankComponent } from './blank/blank.component';
import { SearchComponent } from './search/search.component';
import { SellerComponent } from './project/seller/seller.component';
export const routes: Routes = [
    {
        path: '', 
        component: PagesComponent,
        children:[
            { path:'', redirectTo:'seller', pathMatch:'full' },
            { path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule', data: { breadcrumb: 'Dashboard' }  },
            { path: 'maps', loadChildren: 'app/pages/maps/maps.module#MapsModule', data: { breadcrumb: 'Maps' } },
            { path: 'charts', loadChildren: 'app/pages/charting/charting.module#ChartingModule', data: { breadcrumb: 'Charts' } },
            { path: 'ui', loadChildren: 'app/pages/ui/ui.module#UiModule', data: { breadcrumb: 'UI' } },
            { path: 'tools', loadChildren: 'app/pages/tools/tools.module#ToolsModule', data: { breadcrumb: 'Tools' } },
            { path: 'mail', loadChildren: 'app/pages/mail/mail.module#MailModule', data: { breadcrumb: 'Mail' } },
            { path: 'calendar', loadChildren: 'app/pages/calendar/calendar.module#CalendarModule', data: { breadcrumb: 'Calendar' } },
            { path: 'form-elements', loadChildren: 'app/pages/form-elements/form-elements.module#FormElementsModule', data: { breadcrumb: 'Form Elements' } },
            { path: 'tables', loadChildren: 'app/pages/tables/tables.module#TablesModule', data: { breadcrumb: 'Tables' } },
            { path: 'editors', loadChildren: 'app/pages/editors/editors.module#EditorsModule', data: { breadcrumb: 'Editors' } },
            { path: 'search', component: SearchComponent, data: { breadcrumb: 'Search' } },
            { path: 'blank', component: BlankComponent, data: { breadcrumb: 'Blank page' } },
            { path: 'seller', component: SellerComponent, data: { breadcrumb: 'My Profile' } },
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);