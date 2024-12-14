import { Routes } from '@angular/router';
import { HomeComponent } from "./Components/home/home.component";
import { ServicesComponent } from './Components/service-component/services.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';


export const routes: Routes = [
    {path : '' , redirectTo : '/home' , pathMatch : 'full'},
    {path : 'home' , component : HomeComponent},
    {path : 'services' , component : ServicesComponent},
    {path : 'sign-in' , component : SignInComponent},
];
