import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioFamiliarService {
  hermanoMayor?:string
  hermanoMenor?:string 
  pregunta:string = "Como esta tu hijo"
  getHermanoMayor():string {
    return this.hermanoMayor || ""
  }
  setHermanoMayor(hermano:string) {
    this.hermanoMayor = hermano
  }
  getHermanoPequeno():string {
    return this.hermanoMenor || ""
  }
  setHermanoPequeno(hermano:string) {
    this.hermanoMenor = hermano
  }
  saludar(hermano:string){
    console.log(`Hola  ${hermano}`)

  }
  preguntarPorHijo():string{
    return this.pregunta 
  }
  constructor() { }
}
