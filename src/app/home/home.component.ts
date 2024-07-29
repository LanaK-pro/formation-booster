import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Iarticles } from '../../shared/interface/iarticles';
import { ArticlesService } from '../../shared/services/articles.service';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
//import { BonjourService } from '../../shared/bonjour.service';

export const motsInterdits = (
  control: AbstractControl,
): ValidationErrors | null => {
  const mots = ['lol', 'mdr'];
  return mots.includes(control.value)
    ? { interdit: 'Ce mot est interdit' }
    : null;
};

/* export const motDePasse = (
  control: AbstractControl,
): ValidationErrors | null => {
  const conditionMaj = RegExp(
    '^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$',
  );

  if (!conditionMaj.test(control.value)) {
    return {
      invalide:
        'ce mot de passe necessite une majuscule et un chiffre et un character special',
    };
  }
  return null;
}; */

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  salut: string = '';
  resultat: number = 0;
  article: Iarticles[] = [];

  constructor(private service: ArticlesService) {}

  /* ngOnInit(): void {
    this.article = this.service.fetchFirstArticle;
  }
  //Injection de service

  /* constructor(private service: BonjourService) {}

  ngOnInit(): void {
    this.salut = this.service.saluer();
    this.resultat = this.service.additioner(5, 5);
  } */

  //Formulaire

  public form: FormGroup = new FormGroup({
    name: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10),
        motsInterdits,
      ],
    }),
    email: new FormControl('', {
      validators: [Validators.email, motsInterdits],
    }),
    mdp: new FormControl('', {
      validators: [
        Validators.minLength(8),
        Validators.maxLength(50),
        Validators.required,
        Validators.pattern(
          '^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*/])[a-zA-Z0-9!@#$%^&*/]{8,}$',
        ),
      ],
    }),
  });

  onSubmit() {
    console.log(this.form.get('name')?.value);
    console.log(this.form.get('email')?.value);
  }
}
