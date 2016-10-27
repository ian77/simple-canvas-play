import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core'

@Injectable()
export class CanvasService {

    private _url = "http://localhost:3000/canvas"; //REST API

    constructor(private _http: Http) {
    }

    getFabricCanvas() {
        var fetched_data = '{"objects":[{"type":"rect","left":50,"top":50,"width":20,"height":20,"fill":"green","overlayFill":null,"stroke":null,"strokeWidth":1,"strokeDashArray":null,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"selectable":true,"hasControls":true,"hasBorders":true,"hasRotatingPoint":false,"transparentCorners":true,"perPixelTargetFind":false,"rx":0,"ry":0},{"type":"circle","left":100,"top":100,"width":100,"height":100,"fill":"red","overlayFill":null,"stroke":null,"strokeWidth":1,"strokeDashArray":null,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"selectable":true,"hasControls":true,"hasBorders":true,"hasRotatingPoint":false,"transparentCorners":true,"perPixelTargetFind":false,"radius":50}],"background":"rgba(0, 0, 0, 0)"}';
     
        return fetched_data;
        /*
        return this._http.get(this._url)
            .map(res=>res.json())*/
    }

    createFabricCanvas(canvas) {
        this._http.post(this._url, JSON.stringify(canvas))
            .map(res=>res.json());
    }

}