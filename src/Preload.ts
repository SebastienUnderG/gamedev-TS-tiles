export function preloadimages(obj: any, cb: any) {
    let loaded = 0;
    let toload = 0;
    let images = obj instanceof Array ? [] : {};

    for (let i in obj) {
        toload++;
        images[i] = new Image();
        images[i].src = obj[i];
        images[i].onload = load;
        images[i].onerror = load;
        images[i].onabort = load;
    }

    function load() {
        if (++loaded >= toload) cb(images);
    }
}
