import { Routes } from '@angular/router';
import { DashboardLayout } from './page/dashboard-layout/dashboard-layout';
import { DashboardHome } from './page/dashboard-home/dashboard-home';
import { Inventory } from './page/inventory/inventory';
import { Sales } from './page/sales/sales';
import { StockLevel } from './page/stock-level/stock-level';
import { Suppliers } from './page/suppliers/suppliers';
import { Warehouse } from './page/warehouse/warehouse';

export const routes: Routes = [
    {
        path:'',
        component:DashboardLayout,
        children:[
            {
                path:"dashboard-home",
                component:DashboardHome
            },
            {
                path:"inventory",
                component:Inventory
            },
            {
                path:"sales",
                component: Sales
            },
            {
                path:"stock-level",
                component:StockLevel
            },
            {
                path:"suppliers",
                component: Suppliers
            },
            {
                path:"warehouse",
                component:Warehouse
            },
        ]
    }
];
