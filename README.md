"# simple-canvas-play" 

This app is developed using Angular 2 framework.

The required environment and tools for starting this app are described in the following link : 
https://angular.io/docs/ts/latest/quickstart.html#!#install-packages
(see "Prerequisite: Install Node.js and npm" and "Install packages")


---- WHAT HAS BEEN DONE ? ########

This app consists in a canvas where we can draw some figures, change their dimensions, make them move and delete them.


---- HOW IT HAS BEEN DONE ? #########

The app is living in a component called "CanvasPlayComponent" that consists in some buttons and the canvas.

To apply some actions in the html canvas, we are using as a helper the FABRIC JS library. 
It creates a wrapper around the html canvas in which we work on thereafter, like creating figures and applying some pre-built methods.


----- WHAT HAS NOT BEEN DONE ? #########

The persistence of the canvas has not been fulfilled.


----- WHAT HAS BEEN THOUGHT AND TRIED to complete the last task ? #######

In order to achieve persistance, the idea is to serialize the fabric canvas and store it in a local database in the JSON form, each time 
a modification is applied in the canvas. In the same way, the fabric canvas is loaded from the JSON form saved in the DB while the initialization
of the canvas.
To access the DB, a simple REST API should be developed that take care of "posting" a canvas and "getting" the canvas.


----- WHAT DIFFICULTIES HAVE BEEN ENCOUNTERED ? #########

The main difficulties encountered turn around the fabric wrapper, and how to use it with angular in order to detect changes on it each time they
are applied and take therefore some action.