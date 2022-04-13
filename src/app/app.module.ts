import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarRol4Component } from './componentes/navbar-rol4/navbar-rol4.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './componentes/home/home.component';
import { ErrorComponent } from './componentes/error/error.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarRol4Component,
    FormularioComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
