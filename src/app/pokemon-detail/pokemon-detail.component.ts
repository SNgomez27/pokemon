import {Component, OnInit} from '@angular/core';
import {PokemonApi} from '../services/interfaces/pokimons';
import {PokemonDetailService} from '../services/pokemon/pokemon-detail.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent implements OnInit{
  pokemon: PokemonApi| null={
    name:"",
    url:""
  }
  constructor(
    private pokemonDetailsService: PokemonDetailService
  ) {
  }
  ngOnInit() {
    this.pokemonDetailsService.infoApi$.subscribe(pk =>{
      this.pokemon = pk
    })
  }

}
