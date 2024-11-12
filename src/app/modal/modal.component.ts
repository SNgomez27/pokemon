import {Component, OnInit} from '@angular/core';
import {InformacionService} from '../services/modales/informacion.service';
import {EnviarPokemonService} from '../services/pokemon/enviar-pokemon.service';
import {Pokimons} from '../services/interfaces/pokimons';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit {
  cerrarmodal: boolean = true;
  pokemon: Pokimons| null={
    id: -1,
    nombre: "",
    descripcion:"",
    imagen_url:""
  }



  constructor(
    private informacionservice: InformacionService,
    private enviarPokemonService: EnviarPokemonService
  ){
  }

  ngOnInit() {
    this.enviarPokemonService.info$.subscribe(pokemon =>{
      this.pokemon = pokemon;
    });
  }
  cerrarModal(){
    // this.enviarPokemonService(null);
    this.informacionservice.toggleModal(false);
  }
}
