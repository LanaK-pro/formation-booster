import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  nombre: number = 0;
  @Input() messageCard: string | undefined = 'message card';

  @Output() numberEnfant = new EventEmitter<number>();

  calcul() {
    this.nombre++;
    this.numberEnfant.emit(this.nombre);
  }
}
