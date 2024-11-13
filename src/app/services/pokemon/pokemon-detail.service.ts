import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {PokemonApi} from '../interfaces/pokimons';

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailService {
  pokemonApi: BehaviorSubject<PokemonApi | null> = new BehaviorSubject<PokemonApi|null>(null)
  infoApi$: Observable <PokemonApi|null> = this.pokemonApi.asObservable()
  constructor() { }
  updatePokemApi (pokemon: PokemonApi|null){
    this.pokemonApi.next(pokemon)
  }
}
