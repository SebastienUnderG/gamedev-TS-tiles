export declare class MapMaker {
    cols: number;
    rows: number;
    tsize: number;
    layers: number[][];
    getTile(layer: any, col: number, row: number): number;
    isSolidTileAtXY(x: number, y: number): boolean;
    getCol(x: number): number;
    getRow(y: number): number;
    getX(col: number): number;
    getY(row: number): number;
}
