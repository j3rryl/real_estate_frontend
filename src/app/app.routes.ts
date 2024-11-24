import { Routes } from '@angular/router';
import { PropertiesComponent } from './properties/properties.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'properties', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Homw' },
  { path: 'properties', component: PropertiesComponent, title: 'Properties' },
  { path: '**', component: PageNotFoundComponent },
];
