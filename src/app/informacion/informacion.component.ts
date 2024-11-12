import {Component, OnInit} from '@angular/core';
import {Pokimons, PokemonApi} from '../services/interfaces/pokimons';
import { InformacionService } from '../services/modales/informacion.service';
import {EnviarPokemonService} from '../services/pokemon/enviar-pokemon.service';
import {PokemonApiService} from '../services/pokemon/pokemon-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.scss'
})

export class InformacionComponent implements OnInit{
  mostrarModal: boolean= false;
  pokemonsApi: PokemonApi[]=[]

  constructor(
    private informacionService: InformacionService,
    private EnviarpokemonService: EnviarPokemonService,
    private pokemonApiService: PokemonApiService,
    private router: Router
  ) {}
  ngOnInit() {
    this.informacionService.modal$.subscribe(modal =>{
      this.mostrarModal = modal;
    });
    this.pokemonApiService.getAllPokemon().subscribe({
      next: data => {
        console.log(data.results)
        this.pokemonsApi = data.results
        console.log(this.pokemonsApi)
      },
      error: error =>{
        console.log(error)
      },
      complete: () =>{
        console.log()
      }
    })
  }
  toggleModal(pk: Pokimons){
    this.EnviarpokemonService.updatePokemon(pk);
    this.informacionService.toggleModal(true);
    }

  pokemon: Pokimons[] = [
    {id:1, nombre:"Gastrodon ", descripcion:"Tiene la totalidad del cuerpo recubierta de una sustancia viscosa. Antiguamente, esta había sido con creces su forma más numerosa.",imagen_url:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/423.png"},
    {id:2, nombre:"Hitmontop " , descripcion:"Su especialidad son las patadas danzarinas. El cuerno que tiene en la cabeza está hecho del mismo material que el pelo y las garras. ",imagen_url:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/237.png"},
    {id:3, nombre:"Darmanitan  ", descripcion:"Cuando resulta gravemente herido, se endurece como una piedra y medita para agudizar la mente.  ",imagen_url:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/555.png"},
    {id:4, nombre:"Shiftry ", descripcion:"Se dice que, cuando agita sus abanicos de hojas subido a la copa de algún árbol milenario, soplan vientos gélidos y da comienzo el invierno.",imagen_url:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/275.png"},
    {id:5, nombre:"Calyrex ", descripcion:"Un Pokémon muy compasivo agraciado con el poder de la curación. Reinó en Galar en tiempos remotos. ",imagen_url:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/898.png"},
    {id:6, nombre:"Kyurem ", descripcion:"Pokémon legendario que aguarda al héroe que compense el vacío de su cuerpo de hielo con verdad e ideales. ",imagen_url:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/646.png"}

  ]

  //debemos enviar el nombre
  // a traves de BehavioursSubject al component
  // pokemon-details
  detallesPokemon(nombre: string){
    this.router.navigate(['detalles']);
  }

  toggleNav: boolean = false;
  mostrarNav(){
    this.toggleNav = !this.toggleNav;
  }


}
