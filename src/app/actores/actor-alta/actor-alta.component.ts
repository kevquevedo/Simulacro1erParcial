import { Component, OnInit } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Actores } from 'src/app/clases/actores/actores';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {

  public formulario!: FormGroup;
  nombre!: string;
  apellido!: string;
  username!: string;
  email!: string;
  direccion!: string;
  sexo!: string;
  pais!: string;
  errorMensaje: string | undefined;
  exitoMensaje: string | undefined;

  constructor(
    private fb: FormBuilder,
    private firestore: Firestore,
  ) {
    this.formulario = this.fb.group({
      nombre: [],
      apellido: [],
      username: [],
      email: [],
      direccion: [],
    });
  }

  ngOnInit(): void { }

  recibirPaisSelect(nombrePais: string){
    this.pais = nombrePais;
  }

  verSexo(evento: any){
    this.sexo = evento.srcElement.value;
  }

  crearActor(){

    this.nombre = this.formulario.get('nombre')?.value;
    this.apellido = this.formulario.get('apellido')?.value;
    this.username = this.formulario.get('username')?.value;
    this.email = this.formulario.get('email')?.value;
    this.direccion = this.formulario.get('direccion')?.value;
    let actorNuevo = new Object();
    actorNuevo = {
      "nombre":this.nombre,
      "apellido":this.apellido,
      "username":this.username,
      "email":this.email,
      "direccion":this.direccion,
      "sexo":this.sexo,
      "pais":this.pais
    };

    try{
      let actoresRef = collection(this.firestore, 'actores');
      addDoc(actoresRef, actorNuevo);

      //MENSAJE DE EXITO
      this.exitoMensaje = "El actor se creó con éxito.";
      setTimeout(() =>{
        this.exitoMensaje = undefined
      },2500);
    }catch{
      this.errorMensaje = "No se pudo crear el actor.";
      setTimeout(() =>{
        this.errorMensaje = undefined
      },2500);
    }

  }


}
