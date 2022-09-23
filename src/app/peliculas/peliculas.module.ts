import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculaAltaComponent } from './pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './pelicula-listado/pelicula-listado.component';



@NgModule({
  declarations: [
    PeliculaAltaComponent,
    PeliculaListadoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PeliculasModule { }
