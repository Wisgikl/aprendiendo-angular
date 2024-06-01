import { Component,OnInit } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';
import { ServicioFamiliarService } from '../servicio-familiar.service';
import { EstiloHermanosDirective } from '../estilo-hermanos.directive';
import { MiPipePersonalizadoPipe } from '../mi-pipe-personalizado.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent,EstiloHermanosDirective,MiPipePersonalizadoPipe,CommonModule],
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  nombre?:string;
  fecha?:Date = new Date();
  constructor(
    private _servicioFamiliar: ServicioFamiliarService
  ){

  }
  ngOnInit(): void {
    this._servicioFamiliar.setHermanoMayor('Lucas')
    this.nombre = this._servicioFamiliar.getHermanoMayor();
  }

  saludar(){
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoPequeno() || "")
  }
  preguntar(){
    console.log(this._servicioFamiliar.preguntarPorHijo())
  }

  mensajeRecibido:string = "";

  //Metodo que se va a ejecutar con lo que mande el hijo 
  //Lo que mande el hijo se lo pasa al padre con el evento $event (una prop)
  //El padre recibe ese evento y lo guarda en la variable reciboMensaje
  //El padre se encarga de mostrar el mensaje que le mande el hijo

  recibirMensaje($event:string){
    this.mensajeRecibido = $event;
  }

  valorContador:number = 0;
  mensajePadre = "Anda a comprar una cocona"
  
  
  incrementar() {
    this.valorContador++;
  }
  decrementar() {
    this.valorContador--;
  }
}
