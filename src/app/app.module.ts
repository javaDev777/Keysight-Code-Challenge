import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';
import { AddComponent } from './add/add.component';
import { SubtractComponent } from './subtract/subtract.component';
import { MultiplyComponent } from './multiply/multiply.component';
import {AngularDraggableModule} from 'angular2-draggable';
import { DivideComponent } from './divide/divide.component';
import { ModulusComponent } from './modulus/modulus.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    AddComponent,
    SubtractComponent,
    MultiplyComponent,
    DivideComponent,
    ModulusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularDraggableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
