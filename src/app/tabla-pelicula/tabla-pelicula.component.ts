import { Component, OnInit } from '@angular/core';
import { Peliculas } from '../clases/peliculas/peliculas';


const ELEMENT_DATA: Peliculas[] = [
  {id: 1, nombre: 'The Avengers: Los Vengadores', fechaEstreno: '12/12/2012', cantidadPublico: 1500000, foto: '../assets'},
  {id: 2, nombre: 'Bruja Escarlata y Visión', fechaEstreno: '08/10/2021', cantidadPublico: 1320000, foto: '../assets'},
  {id: 3, nombre: 'Hulk', fechaEstreno: '19/04/2003', cantidadPublico: 2345000, foto: '../assets'},
  {id: 4, nombre: 'Hydrogen', fechaEstreno: '12/12/2021', cantidadPublico: 1500000, foto: '../assets'},
  {id: 5, nombre: 'Hydrogen', fechaEstreno: '12/12/2021', cantidadPublico: 1500000, foto: '../assets'},
  {id: 6, nombre: 'Hydrogen', fechaEstreno: '12/12/2021', cantidadPublico: 1500000, foto: '../assets'},
];

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})

export class TablaPeliculaComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'fechaEstreno', 'cantidadPublico', 'foto'];
  dataSource = ELEMENT_DATA;

  peliculaSeleccionada: Peliculas | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
