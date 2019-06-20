export class Keyboard {

    LEFT: number = 37;
    RIGHT: number = 39;
    UP: number = 38;
    DOWN: number = 40;

    _keys: any = {};

    listenForEvents(keys: any) {
        window.addEventListener('keydown', this._onKeyDown.bind(this));
        window.addEventListener('keyup', this._onKeyUp.bind(this));

        keys.forEach(function (key: string) {
            this._keys[key] = false;
        }.bind(this));
    }

    _onKeyDown(event: any) {
        let keyCode = event.keyCode;
        if (keyCode in this._keys) {
            event.preventDefault();
            this._keys[keyCode] = true;
        }
    }

    _onKeyUp(event: any) {

        let keyCode = event.keyCode;
        if (keyCode in this._keys) {
            event.preventDefault();
            this._keys[keyCode] = false;
        }

    }

    isDown(keyCode: any) {
        if (<any>!keyCode in this._keys) {
            throw new Error('Keycode ' + keyCode + ' is not being listened to');
        }
        return this._keys[keyCode];
    }


}
