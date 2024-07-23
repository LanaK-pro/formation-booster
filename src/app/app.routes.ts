import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { BlogComponent } from './blog/blog.component';
import { CommentComponent } from './comment/comment.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { Error404Component } from './error404/error404.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'inscription', component: RegistrationFormComponent },
  { path: 'toggle', component: AProposComponent },
  { path: 'pokemon', component: PokemonsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: BlogDetailsComponent },
  { path: 'comment', component: CommentComponent },
  { path: '**', component: Error404Component },
];
