import { Component, OnInit } from '@angular/core';
import { Ipokemons } from '../../shared/ipokemons';
import { PokemonService } from '../../shared/pokemon.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css',
})
export class PokemonsComponent implements OnInit {
  pokemons: Ipokemons[] = [];
  constructor(private service: PokemonService) {}

  ngOnInit(): void {
    this.pokemons = this.service.fetchAll();
  }
}
