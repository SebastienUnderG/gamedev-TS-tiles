export class Keyboard {

    // https://keycode.info/

    // event.key => nationnal
    // event.code => international

    static keysMap: Map<string, boolean> = new Map<string, boolean>();
    static cooldownMap: Map<string, Date> = new Map<string, Date>();
    static cooldown: number = 50;

    static listenForEvents(keys: string[]) {
        window.addEventListener('keydown', this._onKeyDown);
        window.addEventListener('keyup', this._onKeyUp);


        // console.log(this);
        // console.log(self);

        keys.forEach(function (key: string) {
            Keyboard.keysMap.set(key, false);
        });


    }

    static _onKeyDown(event: any) {
        const keyCode = event.code;
        if (Keyboard.keysMap.has(keyCode)) {
            event.preventDefault();
            Keyboard.keysMap.set(keyCode, true);
        }
    }

    static _onKeyUp(event: any) {
        const keyCode = event.code;
        if (Keyboard.keysMap.has(keyCode)) {
            event.preventDefault();
            Keyboard.keysMap.set(keyCode, false);
        }

    }

    static isDown(keyCode: string) {
        if (!Keyboard.keysMap.has(keyCode)) {
            throw new Error('Keycode ' + keyCode + ' is not being listened to');
        }
        return Keyboard.keysMap.get(keyCode);
    }

    static isDownWithCoolDown(keyCode: string) {
        if (!Keyboard.keysMap.has(keyCode)) {
            throw new Error('Keycode ' + keyCode + ' is not being listened to');
        }

         const isCooldown =  (Keyboard.cooldownMap.has(keyCode) && ((Date.now() - Keyboard.cooldownMap.get(keyCode).getTime()) < Keyboard.cooldown));

        if (Keyboard.keysMap.get(keyCode)) {
            Keyboard.cooldownMap.set(keyCode, new Date());
        }

        return (!isCooldown ? Keyboard.keysMap.get(keyCode) : false)
        // return  Keyboard.keysMap.get(keyCode);
    }


}
