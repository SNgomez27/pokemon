import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Pokimons} from '../interfaces/pokimons';

@Injectable({
  providedIn: 'root'
})
export class EnviarPokemonService {
  pokemon: BehaviorSubject<Pokimons |null> = new BehaviorSubject<Pokimons |null>(null);
  info$: Observable<Pokimons|null> = this.pokemon.asObservable();
  constructor() { }
  updatePokemon(info: Pokimons|null){
    this.pokemon.next(info);
  }
}
