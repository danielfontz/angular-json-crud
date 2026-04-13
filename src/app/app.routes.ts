import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { ViewComponent } from './pages/view/view.component';
import { ModifyComponent } from './pages/modify/modify.component';
import { DeleteComponent } from './pages/delete/delete.component';
import { ListComponent } from './pages/list/list.component';

export const routes: Routes = [
    { path: '', redirectTo: 'view', pathMatch: 'full' },
    { path: 'register', component: RegisterComponent, title: 'Register' },
    { path: 'view', component: ViewComponent, title: 'View' },
    { path: 'list', component: ListComponent, title: 'List' },
    { path: 'modify', component: ModifyComponent, title: 'Modify' },
    { path: 'delete', component: DeleteComponent, title: 'Delete' },
    { path: '**', redirectTo: 'view' }
];
