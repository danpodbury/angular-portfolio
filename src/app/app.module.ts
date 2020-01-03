import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, routingComponents ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
