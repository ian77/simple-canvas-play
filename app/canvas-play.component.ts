import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { CanvasService } from './canvas.service';

@Component({
  selector: 'canvas-play',
  template: `
    <div id="canvas_play">
        <div id="tools_panel">
            Add : 
            <button (click)="onClickSquare()">Square</button>
            <button (click)="onClickRectangle()">Rectangle</button>
            <button (click)="onClickCircle()">Circle</button>
            <button (click)="onClickLine()">Line</button>
        </div>
        <canvas id="my_canvas" #my_canvas width="600" height="500">
        </canvas>
        <div id="actions_panel">
            <button (click)="onClickDelete()">Delete</button>
            <button (click)="onClickClear()">Clear</button>
        </div>
    </div>

  `,
  styles: [`
    #my_canvas {
        background-color: #EBF2F5;
        border: 1px solid #000000;
    }
    #tools_panel {
        width: 300px;
        height: 30px;
        padding: 5px;
        border-radius: 10px;
        border: 2px solid #73AD21;
        background-color: #D1F0B3;  
    }
    #actions_panel {       
        width: 200px;
        padding: 5px;
        border-radius: 10px;
        border: 2px solid #3C4B85;
        background-color: #A7BCED;  
    }
      `
  ],
  providers: [CanvasService]

})
export class CanvasPlayComponent implements OnInit{ 

    fabric_canvas;

    //constructor(private canvasService: CanvasService) {}
    
    ngOnInit(){
        this.loadCanvas();
    }
/*
    ngOnChanges() {
        alert('change!');
        var fct =  function(ev){
            alert('change!')};
        this.fabric_canvas.on({'canvas:cleared': fct});
    }
*/
    
    onClickSquare() {
        var square = new fabric.Rect({
            left: 100,
            top: 100,
            fill: 'Blue',
            width: 80,
            height: 80
        });
        this.fabric_canvas.add(square); 
    }
    onClickRectangle(){
        // create a rectangle object
        var rect = new fabric.Rect({
            left: 100,
            top: 100,
            fill: '#E4444E',
            width: 100,
            height: 60
        });

        // "add" rectangle onto canvas
        this.fabric_canvas.add(rect);  
    } 
    onClickCircle() {
        var circle= new fabric.Circle({
            left: 100,
            top: 100,
            fill: 'Green',
            radius: 20
        });
        this.fabric_canvas.add(circle); 
    }
    onClickLine() {
        var line = new fabric.Line([50, 100, 200, 200], {
        left: 170,
        top: 150,
        stroke: 'red'
        });
       this.fabric_canvas.add(line); 
    }
    onClickDelete() {

        var active_group = this.fabric_canvas.getActiveGroup()
        
        if (active_group) {
            active_group.forEachObject(function(obj) { this.canvas.remove(obj) });
        } else {
            this.fabric_canvas.remove(this.fabric_canvas.getActiveObject());
        }
         
    }
    onClickClear() {
        this.fabric_canvas.clear();
        /*var all_objects = this.canvas.getObjects();
        for (var i = 0; i < all_objects.length; i++) { 
            this.canvas.remove(all_objects[i]);
            console.log(i);
            
        }*/
    }

    loadCanvas() {
        this.fabric_canvas = new fabric.Canvas('my_canvas');
        //var str_json_canvas = this.canvasService.getFabricCanvas();
        
        var str_json_canvas = '{"objects":[{"type":"rect","left":50,"top":50,"width":20,"height":20,"fill":"green","overlayFill":null,"stroke":null,"strokeWidth":1,"strokeDashArray":null,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"selectable":true,"hasControls":true,"hasBorders":true,"hasRotatingPoint":false,"transparentCorners":true,"perPixelTargetFind":false,"rx":0,"ry":0},{"type":"circle","left":100,"top":100,"width":100,"height":100,"fill":"red","overlayFill":null,"stroke":null,"strokeWidth":1,"strokeDashArray":null,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"selectable":true,"hasControls":true,"hasBorders":true,"hasRotatingPoint":false,"transparentCorners":true,"perPixelTargetFind":false,"radius":50}],"background":"rgba(0, 0, 0, 0)"}';
        
        this.fabric_canvas.loadFromJSON(str_json_canvas);
        
    }



}
