import {Game} from "./Game";

const width = 512;
const height = 512;

//
// Game object
//
let game: Game = new Game(width, height);


//
// start up function
//
window.onload = function () {

    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("windows");
    canvas.width = width;
    canvas.height = height;
    // canvas.width  = window.innerWidth;
    // canvas.width = window.innerHeight;
    let context: CanvasRenderingContext2D = canvas.getContext("2d");
    game.run(context);

};
