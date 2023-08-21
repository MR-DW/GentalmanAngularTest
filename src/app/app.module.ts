import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

// Al cambiar un modulo se debe volver a compilar

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // BrowserModule,
    // Se cambia el primero por el segundo(que está abajo),  permite utilizar animaciones con angular material.
    BrowserAnimationsModule,
    // El Routing es el encargado de decir que componentes/modulos se vana a dibujar en el app.component.html donde está la etiqueta router-outlet
    // Por ejemplo la home está bajo este routing
    AppRoutingModule,

    // Al ser un standalone no se declara se importa
    ToolbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
