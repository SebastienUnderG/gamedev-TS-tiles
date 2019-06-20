export declare class Camera {
    x: number;
    y: number;
    width: number;
    height: number;
    maxX: number;
    maxY: number;
    following: any;
    constructor(map: any, width: any, height: any);
    follow(sprite: any): void;
    update(): void;
}
