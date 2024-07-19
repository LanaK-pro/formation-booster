import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-a-propos',
  standalone: true,
  imports: [NgClass, NgStyle, NgIf],
  templateUrl: './a-propos.component.html',
  styleUrl: './a-propos.component.css',
})

//Pas visible dans le site c'est une correction que j'ai prise
//Tu peux aller le teste sur /toggle la fin du lien
export class AProposComponent {
  isActive = true;
  isDisabled = false;

  isLight: boolean = true;
  fontSize: number = 20;
}
