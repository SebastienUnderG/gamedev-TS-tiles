import {CarteMap} from "./interface/Map";
import {TileSet} from "./interface/Set";

export class MapMaker {
    cols: number = 12;
    rows: number = 12;
    tsize: number = 64;

    tileset: CarteMap;
    tilemap: TileSet;

    layers: number[][] = [[
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
        3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
        3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
        3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
        3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
        3, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 3,
        3, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 3,
        3, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 3,
        3, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 3,
        3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 3,
        3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 3,
        3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3
    ], [
        4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4,
        4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
        4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
        4, 0, 0, 5, 0, 0, 0, 0, 0, 5, 0, 4,
        4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
        4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
        4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
        4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
        4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
        4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
        4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
        4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3
    ]];


    constructor(set: string, map: string) {
        // this.tileset = require(set);
        // this.tilemap = require(map);
    }


    getTile(layer: any, col: number, row: number) {
        return this.layers[layer][row * this.cols + col];
    }


    isSolidTileAtXY(x: number, y: number) {
        let col = Math.floor(x / this.tsize);
        let row = Math.floor(y / this.tsize);

        // tiles 3 and 5 are solid -- the rest are walkable
        // loop through all layers and return TRUE if any tile is solid
        return this.layers.reduce(function (res: any, layer: any, index: any) {
            let tile = this.getTile(index, col, row);
            let isSolid = tile === 3 || tile === 5;
            return res || isSolid;
        }.bind(this), false);
    }


    getCol(x: number) {
        return Math.floor(x / this.tsize);
    }

    getRow(y: number) {
        return Math.floor(y / this.tsize);
    }

    getX(col: number) {
        return col * this.tsize;
    }

    getY(row: number) {
        return row * this.tsize;
    }


}
