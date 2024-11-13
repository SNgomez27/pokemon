import {Component, OnInit} from '@angular/core';
import {PokemonApi} from '../services/interfaces/pokimons';
import {PokemonDetailService} from '../services/pokemon/pokemon-detail.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent implements OnInit {
  pokemon: PokemonApi | null = {
    name: "",
    url: ""
  }
  pokemonDetalles: any

  constructor(
    private pokemonDetailsService: PokemonDetailService,
    private http: HttpClient
  ) {
  }

  ngOnInit() {
    this.pokemonDetailsService.infoApi$.subscribe(pk => {
      this.pokemon = pk
    })
    this.getAllPokemonData()
  }

  getAllPokemonData() {
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon/' + this.pokemon?.name).subscribe(datos => {
      console.log(datos)
      this.pokemonDetalles = datos
    })


  }
}
