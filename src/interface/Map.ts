export interface Layer {
    data: number[];
    height: number;
    id: number;
    name: string;
    opacity: number;
    type: string;
    visible: boolean;
    width: number;
    x: number;
    y: number;
}

export interface Tileset {
    firstgid: number;
    source: string;
}

export interface CarteMap {
    height: number;
    infinite: boolean;
    layers: Layer[];
    nextlayerid: number;
    nextobjectid: number;
    orientation: string;
    renderorder: string;
    tiledversion: string;
    tileheight: number;
    tilesets: Tileset[];
    tilewidth: number;
    type: string;
    version: number;
    width: number;
}
