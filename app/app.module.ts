import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }   from './app.component';
import { CanvasPlayComponent } from './canvas-play.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, CanvasPlayComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

