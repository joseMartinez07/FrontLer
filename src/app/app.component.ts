import {Component, OnInit} from '@angular/core';
import { NgModel } from '@angular/forms';
import { ResolveStart } from '@angular/router';
import { AppServicesService } from './app-services.service';
export interface Persona {
  id?: number;
  nombre?: string;
  num_cedula?: string;
  fecha_n?: string;
  edad?: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  persona = new Array<Persona>();
  personaRegistrar:string="";
  constructor(private servicio:AppServicesService){
  }

  ngOnInit(): void {
    this.servicio.getobtenerPersona().subscribe(respuesta=>{
      this.persona = respuesta;
    })
  }

  objRegistrar(nombre:string, cedula:string, edad:string, fecha:string){
    let prueba:Persona={};
    prueba.nombre=nombre;
    prueba.edad= Number(edad);
    prueba.fecha_n=fecha;
    prueba.num_cedula=cedula;
    
    this.servicio.save(prueba).subscribe(guarda=>{
      console.log(guarda);
    })
   console.log(nombre, cedula, edad, fecha);
   window.location.reload()
  }


  objActualizar(id:string, nombre:string, cedula:string, edad:string, fecha:string){
    let prueba:Persona={};
    prueba.id=Number(id);
    prueba.nombre=nombre;
    prueba.edad= Number(edad);
    prueba.fecha_n=fecha;
    prueba.num_cedula=cedula;

    this.servicio.save(prueba).subscribe(actuliza=>{
      console.log(actuliza)
    })
    window.location.reload()
  }

  objEliminar(id:number){    
    this.servicio.delete(id).subscribe(elimina =>{
      console.log(elimina);
    })
    window.location.reload()
  }

  displayedColumns: string[] = ['identi', 'cedula', 'nombrepersona', 'fecha_na', 'edad', 'acciones'];
}