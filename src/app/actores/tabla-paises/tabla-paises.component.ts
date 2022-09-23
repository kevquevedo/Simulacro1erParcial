import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Paises } from 'src/app/clases/Paises/paises';
import { PaisesService } from 'src/app/servicios/paisesService/paises.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  public paises!: Paises[];
  @Output() paisSeleccionado = new EventEmitter<string>();

  constructor(
    private httpClient: HttpClient,
    private listadoPaises: PaisesService
  ) { }

  ngOnInit(): void {

    this.listadoPaises.paises$.subscribe(
      respuesta => {

        this.paises = new Array<Paises>();
        (respuesta as any).forEach((pais: any) => {

          let paisAux = new Paises(pais.alpha3Code, pais.translations.es, pais.flag);
          this.paises?.push(paisAux)
        });

        this.paises = this.paises.sort(this.compare)
    });

  }

  compare(a: Paises, b: Paises) {
    if (a.nombre < b.nombre) {
      return -1;
    }
    if (a.nombre > b.nombre) {
      return 1;
    }
    return 0;
  }

  seleccionarPais(nombre: string){

    this.paisSeleccionado.emit(nombre);
  }

}
