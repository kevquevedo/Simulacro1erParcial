import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorAltaComponent } from './actor-alta/actor-alta.component';
import { ActorListadoComponent } from './actor-listado/actor-listado.component';
import { ActorRoutingRoutingModule } from './actor-routing-routing.module';
import { TablaPaisesComponent } from './tabla-paises/tabla-paises.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ActorAltaComponent,
    ActorListadoComponent,
    TablaPaisesComponent
  ],
  imports: [
    CommonModule,
    ActorRoutingRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ActoresModule { }
