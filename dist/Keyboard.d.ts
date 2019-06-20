export declare class Keyboard {
    LEFT: number;
    RIGHT: number;
    UP: number;
    DOWN: number;
    _keys: any;
    listenForEvents(keys: any): void;
    _onKeyDown(event: any): void;
    _onKeyUp(event: any): void;
    isDown(keyCode: any): any;
}
