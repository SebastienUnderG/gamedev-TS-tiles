export declare class Hero {
    SPEED: number;
    map: any;
    x: number;
    y: number;
    width: number;
    height: number;
    image: any;
    screenX: number;
    screenY: number;
    constructor(map: any, loader: any, x: number, y: number);
    setImage(loader: any, key: string): void;
    move(delta: number, dirx: number, diry: number): void;
    _collide(dirx: number, diry: number): void;
}
