// alt +shift + o y acomoda las importaciones

import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
// Importar modulo del páginador que es un compo aparte

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { People } from 'src/app/data';
import { Person } from 'src/app/models';


@Component({
  selector: 'app-people-table',
  // Como es un standalone hay que importar en los imports todos los imports de los componentes de angular material alojados en la pestaña API
  standalone: true,
  imports: [CommonModule,
    // Modulo del paginador
    MatPaginatorModule,
    // Necesario para formularios (como el filtro es un form es necesario importartlo)
    MatFormFieldModule,
    // Necesario para manejar los inputs
    MatInputModule,
    // Es necesario importarlo para que le de valor a dataSource
    MatTableModule,
    // Es necesario para que acomode la lista de menor a mayor y viceversa
    MatSortModule,
  ],
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.scss']
})
export class PeopleTableComponent implements OnInit {
    // Para utilizar este componente tabla, se le asigna a la variable dataSource un objeto
  // MatTableDataSource (que es el objeto de angular material, que requiere su importación),
  // este objeto va a utilizar el modelo Person para reconocer el contenido/datos/caracteristicas
  // trae data/ss/backend y de esa manera poder volcarlos y utilizarlos en el componente.
  // Luego como el ss/datos/backend es un arreglo/array de personas, el componente puede reconocer todo el arreglo
  // debido a que asocia cada persona que lee al people.data, por el formato del modelo Person que fue construido
  // en base al ss/datos/backend.
  dataSource: MatTableDataSource<Person>;
  // Define las columnas de la tabla
  displayedColumns: string[] = ['id', 'name', 'category', 'company', 'levelOfHappiness'];
  // De esta manera guardo toda la información/caracteristicas del modelo en una variable y luego puedo
  // expresarlas en el html sin necesidad de usar una tabla.
  people = People;

  // el ViewChild es el encargado de buscar un elemento específico dentro del html del componente.
  // Se le añade ! a las variables que no se inicializan pero que si se inicializaran luego en el uso del código.
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  // Para buscar elementos se puede hacer de dos maneras:
  // 1- Por el tipo de elemento, al ser este elemento un matsort, yo lo puedo identificar en el html porque el elemento
  // tag lo tiene como atributo.
  // <table mat-table [dataSource]="dataSource" matSort>
  // 2- Y otra forma es por el uso de un almohadilla # + texto, que nos permita identificar el tag elemento html,
  // que contendra esta almohadilla como un atributo por eje: #estoEsUnSort
  // <table mat-table [dataSource]="dataSource" #estoEsUnSort>

  constructor() {

    // Assign the users to the data source for the table to render
    this.dataSource = new MatTableDataSource(People);
  }

  ngOnInit(){
  };

  // Este ng permite manejar ciclos de vida, en el cual indica que se va a ejecutar algo luego de que se haya cargado la vista
  // Es parte del ngOnInit.
  ngAfterViewInit() {
    // Una vez cargada la vista, vamos a identificar quien es el páginador y el sort.
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // Función para el filtro
  // Recibe el evento de lo que escribe el usuario
  applyFilter(event: Event) {
    // Se le asigna a la variable filterValue, lo que escribió el usuario en el HTMLInputElement
    const filterValue = (event.target as HTMLInputElement).value;
    // aquí limpia lo que ingreso el usuario y lo compara con los datos volcados en la tabla
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      console.log("this.dataSource.paginator: ", this.dataSource.paginator)
      // En la primera página
      this.dataSource.paginator.firstPage();
    }
  }
}

