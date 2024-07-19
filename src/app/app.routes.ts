import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { PokemonsComponent } from './pokemons/pokemons.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'inscription', component: RegistrationFormComponent },
  { path: 'toggle', component: AProposComponent },
  { path: 'pokemon', component: PokemonsComponent },
];
