import { Assets } from "./Assets";
import { Hero } from "./Hero";
import { Keyboard } from "./Keyboard";
import { MapMaker } from "./MapMaker";
import { Camera } from "./Camera";
export declare class Game {
    ctx: CanvasRenderingContext2D;
    _previousElapsed: number;
    loader: Assets;
    character: File;
    tiles: File;
    keyboard: Keyboard;
    map: MapMaker;
    hero: Hero;
    tileAtlas: any;
    camera: Camera;
    init(): void;
    update(delta: number): void;
    render(): void;
    run(context: CanvasRenderingContext2D): void;
    load(): any[];
    tick: (elapsed: number) => void;
    _drawLayer(layer: any): void;
    _drawGrid(): void;
}
