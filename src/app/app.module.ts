import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Angular material
import {MatButtonModule} from '@angular/material/button';

/* Conexiones a internet */
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SaludoComponent } from './ui/saludo/saludo/saludo.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
