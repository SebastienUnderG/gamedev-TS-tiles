import {Assets} from "./Assets";
import {Hero} from "./Hero";
import {Keyboard} from "./Keyboard";
import {MapMaker} from "./MapMaker";
import {Camera} from "./Camera";


export class Game {
    ctx: CanvasRenderingContext2D;
    _previousElapsed: number;
    loader: Assets = new Assets();
    character: File = require('../assets/character.png');
    tiles: File = require('../assets/tiles.png');
    keyboard: Keyboard = new Keyboard();
    map: MapMaker = new MapMaker();
    hero: Hero;
    tileAtlas: any;
    camera: Camera;

    init() {

        this.keyboard.listenForEvents(
            [this.keyboard.LEFT, this.keyboard.RIGHT, this.keyboard.UP, this.keyboard.DOWN]);

        this.tileAtlas = this.loader.getImage('tiles');

        this.hero = new Hero(this.map, this.loader, 160, 160);
        this.camera = new Camera(this.map, 512, 512);
        this.camera.follow(this.hero);
    }

    update(delta: number) {
        // handle hero movement with arrow keys
        let dirx = 0;
        let diry = 0;
        if (this.keyboard.isDown(this.keyboard.LEFT)) {
            dirx = -1;
        } else if (this.keyboard.isDown(this.keyboard.RIGHT)) {
            dirx = 1;
        } else if (this.keyboard.isDown(this.keyboard.UP)) {
            diry = -1;
        } else if (this.keyboard.isDown(this.keyboard.DOWN)) {
            diry = 1;
        }

        this.hero.move(delta, dirx, diry);
        this.camera.update();

    }

    render() {
        // draw map background layer
        this._drawLayer(0);

        // draw main character
        this.ctx.drawImage(
            this.hero.image,
            this.hero.screenX - this.hero.width / 2,
            this.hero.screenY - this.hero.height / 2);

        // draw map top layer
        this._drawLayer(1);

        // this._drawGrid();

    }


    run(context: CanvasRenderingContext2D) {
        this.ctx = context;
        this._previousElapsed = 0;

        let p: Promise<any>[] = this.load();

        Promise.all(p).then(() => {

            this.init();
            window.requestAnimationFrame(this.tick);
        })

    }

    load() {
        return [
            this.loader.loadImage('tiles', this.tiles),
            this.loader.loadImage('hero', this.character)
        ];
    }


    tick = (elapsed: number) => {

        window.requestAnimationFrame(this.tick);

        // clear previous frame
        this.ctx.clearRect(0, 0, 512, 512);

        // compute delta time in seconds -- also cap it
        let delta = (elapsed - this._previousElapsed) / 1000.0;
        delta = Math.min(delta, 0.25); // maximum delta of 250 ms
        this._previousElapsed = elapsed;

        this.update(delta);

        this.render();

    }


    _drawLayer(layer: any) {
        let startCol = Math.floor(this.camera.x / this.map.tsize);
        let endCol = startCol + (this.camera.width / this.map.tsize);
        let startRow = Math.floor(this.camera.y / this.map.tsize);
        let endRow = startRow + (this.camera.height / this.map.tsize);
        let offsetX = -this.camera.x + startCol * this.map.tsize;
        let offsetY = -this.camera.y + startRow * this.map.tsize;

        for (let c = startCol; c <= endCol; c++) {
            for (let r = startRow; r <= endRow; r++) {
                let tile = this.map.getTile(layer, c, r);
                let x = (c - startCol) * this.map.tsize + offsetX;
                let y = (r - startRow) * this.map.tsize + offsetY;
                if (tile !== 0) { // 0 => empty tile
                    this.ctx.drawImage(
                        this.tileAtlas, // image
                        (tile - 1) * this.map.tsize, // source x
                        0, // source y
                        this.map.tsize, // source width
                        this.map.tsize, // source height
                        Math.round(x),  // target x
                        Math.round(y), // target y
                        this.map.tsize, // target width
                        this.map.tsize // target height
                    );
                }
            }
        }
    }


    _drawGrid() {
        let width = this.map.cols * this.map.tsize;
        let height = this.map.rows * this.map.tsize;
        let x, y;
        for (let r = 0; r < this.map.rows; r++) {
            x = -this.camera.x;
            y = r * this.map.tsize - this.camera.y;
            this.ctx.beginPath();
            this.ctx.moveTo(x, y);
            this.ctx.lineTo(width, y);
            this.ctx.stroke();
        }
        for (let c = 0; c < this.map.cols; c++) {
            x = c * this.map.tsize - this.camera.x;
            y = -this.camera.y;
            this.ctx.beginPath();
            this.ctx.moveTo(x, y);
            this.ctx.lineTo(x, height);
            this.ctx.stroke();
        }

    }


}
