export class Actores {

  nombre: string | undefined;
  apellido: string | undefined;
  username: string | undefined;
  email: string | undefined;
  direccion: string | undefined;
  sexo: string | undefined;
  pais_origen: string | undefined;

  constructor(
    nombre: string,
    apellido: string,
    username: string,
    email: string,
    direccion: string,
    sexo: string,
    pais_origen: string){

    this.nombre = nombre;
    this.apellido = apellido;
    this.username = username;
    this.email = email;
    this.direccion = direccion;
    this.sexo = sexo;
    this.pais_origen = pais_origen;
  }
}
