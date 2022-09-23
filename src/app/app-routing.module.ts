import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { BusquedaComponent } from './busqueda/busqueda.component';


const rutas: Routes = [

  {path:'bienvenido', component: BienvenidoComponent},
  {path:'busqueda', component: BusquedaComponent},
  {path:'actor',
    loadChildren: () => import('./actores/actores.module').then(r => r.ActoresModule)
  },
  {path:'peliculas',
    loadChildren: () => import('./peliculas/peliculas.module').then(r => r.PeliculasModule)
  },
  {path:'**', component: BusquedaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
