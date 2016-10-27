"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var canvas_service_1 = require('./canvas.service');
var CanvasComponent = (function () {
    function CanvasComponent() {
    }
    /*
        ngOnInit(){
    
            //this.loadCanvas(canvasService);
            this.fabric_canvas = new fabric.Canvas('my_canvas');
        }
    /*
        ngOnChanges() {
            alert('change!');
            var fct =  function(ev){
                alert('change!')};
            this.fabric_canvas.on({'canvas:cleared': fct});
        }
    */
    CanvasComponent.prototype.onClickSquare = function () {
        var square = new fabric.Rect({
            left: 100,
            top: 100,
            fill: 'Blue',
            width: 80,
            height: 80
        });
        this.fabric_canvas.add(square);
    };
    CanvasComponent.prototype.onClickRectangle = function () {
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
    };
    CanvasComponent.prototype.onClickCircle = function () {
        var circle = new fabric.Circle({
            left: 100,
            top: 100,
            fill: 'Green',
            radius: 20
        });
        this.fabric_canvas.add(circle);
    };
    CanvasComponent.prototype.onClickLine = function () {
        var line = new fabric.Line([50, 100, 200, 200], {
            left: 170,
            top: 150,
            stroke: 'red'
        });
        this.fabric_canvas.add(line);
    };
    CanvasComponent.prototype.onClickDelete = function () {
        var active_group = this.fabric_canvas.getActiveGroup();
        if (active_group) {
            active_group.forEachObject(function (obj) { this.canvas.remove(obj); });
        }
        else {
            this.fabric_canvas.remove(this.fabric_canvas.getActiveObject());
        }
    };
    CanvasComponent.prototype.onClickClear = function () {
        this.fabric_canvas.clear();
        /*var all_objects = this.canvas.getObjects();
        for (var i = 0; i < all_objects.length; i++) {
            this.canvas.remove(all_objects[i]);
            console.log(i);
            
        }*/
    };
    CanvasComponent.prototype.onClickSave = function () {
        /* canvas' serialization */
        //JSON.stringify(this.canvas);
        /* save the serialized data in the DB */
    };
    CanvasComponent.prototype.loadCanvas = function (canvasService) {
        this.fabric_canvas = new fabric.Canvas('my_canvas');
        var str_json_canvas = canvasService.getFabricCanvas();
        /*
        var str_json_canvas = '{"objects":[{"type":"rect","left":50,"top":50,"width":20,"height":20,"fill":"green","overlayFill":null,"stroke":null,"strokeWidth":1,"strokeDashArray":null,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"selectable":true,"hasControls":true,"hasBorders":true,"hasRotatingPoint":false,"transparentCorners":true,"perPixelTargetFind":false,"rx":0,"ry":0},{"type":"circle","left":100,"top":100,"width":100,"height":100,"fill":"red","overlayFill":null,"stroke":null,"strokeWidth":1,"strokeDashArray":null,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"selectable":true,"hasControls":true,"hasBorders":true,"hasRotatingPoint":false,"transparentCorners":true,"perPixelTargetFind":false,"radius":50}],"background":"rgba(0, 0, 0, 0)"}';
        */
        this.fabric_canvas.loadFromJSON('str_json_canvas');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CanvasComponent.prototype, "fabric_canvas", void 0);
    CanvasComponent = __decorate([
        core_1.Component({
            selector: 'canvas-play',
            template: "\n    <div id=\"canvas_play\">\n        <div id=\"tools_panel\">\n            Add : \n            <button (click)=\"onClickSquare()\">Square</button>\n            <button (click)=\"onClickRectangle()\">Rectangle</button>\n            <button (click)=\"onClickCircle()\">Circle</button>\n            <button (click)=\"onClickLine()\">Line</button>\n        </div>\n        <canvas id=\"my_canvas\" #my_canvas width=\"600\" height=\"500\" style=\"border:1px solid #000000;\">\n        </canvas>\n        <div id=\"actions_panel\">\n            <button (click)=\"onClickDelete()\">Delete</button>\n            <button (click)=\"onClickClear()\">Clear</button>\n            <button (click)=\"changeTitle()\">Change title</button>\n        </div>\n    </div>\n\n  ",
            styles: ["\n    #my_canvas {\n        background-color: #EDEDED;\n    }\n    #tools_panel {\n        width: 300px;\n        height: 30px;\n        padding: 5px;\n        border-radius: 10px;\n        border: 2px solid #73AD21;\n        background-color: #D1F0B3;  \n    }\n    #actions_panel {       \n        width: 200px;\n        padding: 5px;\n        border-radius: 10px;\n        border: 2px solid #3C4B85;\n        background-color: #A7BCED;  \n    }\n      "
            ],
            providers: [canvas_service_1.CanvasService]
        }), 
        __metadata('design:paramtypes', [])
    ], CanvasComponent);
    return CanvasComponent;
}());
exports.CanvasComponent = CanvasComponent;
//# sourceMappingURL=canvas.component.js.map