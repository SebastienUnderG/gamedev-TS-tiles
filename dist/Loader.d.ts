export declare class Loader {
    images: Map<string, HTMLImageElement>;
    loadImage(key: string, src: any): Promise<unknown>;
    getImage(key: string): any;
}
