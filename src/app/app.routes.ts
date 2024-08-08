import { Routes } from '@angular/router';
import { UsersComponent } from './Components/users/users.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { ErrorComponent } from './Components/error/error.component';
import { StartComponent } from './Components/start/start.component';

export const routes: Routes = [
    // {path:'', redirectTo:'users', pathMatch:'full'},
    {path:'',component:StartComponent},
    {path:'users',component:UsersComponent},
    {path:'users/:id',component:UserDetailsComponent},
    {path:'**',component:ErrorComponent}
];
