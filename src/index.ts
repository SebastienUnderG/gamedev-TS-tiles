import {Game} from "./Game";

console.log('See this in your browser console: Typescript Webpack Starter Launched');


//
// Game object
//
let game: Game = new Game();
// let game: SimpleGame = new SimpleGame();


//
// start up function
//

window.onload = function () {

    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("windows");

    canvas.width = 512;
    canvas.height = 512;

    // canvas.width  = window.innerWidth;
    // canvas.width = window.innerHeight;

    let context: CanvasRenderingContext2D = canvas.getContext("2d");

    game.run(context);


};


