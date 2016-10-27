import { Component } from '@angular/core';
import { CanvasPlayComponent } from './canvas-play.component';

@Component({
  selector: 'my-app',
  template: `
    <header><h1>Simple Canvas Play App</h1></header> 
      
    <canvas-play></canvas-play> 
            
  `,
  styles: [`
    header {
      background-color: black;
      padding: 5px;
    }
    h1 {
      color: white;
    }
    `
  ],
})
export class AppComponent { 

}
