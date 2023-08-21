import { Component, OnInit } from '@angular/core';
// Se importa desde angular material de la solapa api, el componenteque se utiliza en el html de angular material(como bootstrap)
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PeopleTableComponent } from '../people-table';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  // Se declara una sección imports para allí colocar las importaciones que se hicieron arriba
  imports:[MatToolbarModule, MatIconModule, MatDialogModule, CommonModule],
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit{

// Se declaran ss o injectables en el constructor, hace que el componente dependa del ss, sin este no funciona.
// Este es un nuevo componente dialogo que se declara dentro del componente padre, en este caso header porque
// solo se utilizará este botón que abre un modal/dialogo con la tabla aquí y no se utilizará en ningún otro lado.
  constructor(public dialog: MatDialog){}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    // Utiliza el componente PeopleTableComponent, para que se dibuje la tabla
    //  solamente cuando se abra el dialogo
    this.dialog.open(PeopleTableComponent, {
      enterAnimationDuration,
      exitAnimationDuration
    });
  }


  ngOnInit(): void {

  }

}
