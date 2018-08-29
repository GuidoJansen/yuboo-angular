import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GridComponent } from './grid/grid.component';
import { DamnedComponent } from './damned/damned.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, GridComponent, DamnedComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
