import {preloadimages} from './Preload';

export class Assets {
    images: Map<string, HTMLImageElement> = new Map<string, HTMLImageElement>();

    loadImage(key: string, src: any): any {
        let isLoad: Promise<HTMLImageElement> = new Promise(
            (resolve: any, reject: any) => {
                preloadimages([src], (image: HTMLImageElement) => {
                    this.images.set(key, image[0]);
                    resolve(image[0]);
                });

            }
        );

        return isLoad;

    }


    getImage(key: string): HTMLImageElement {
        return (this.images.has(key)) ? this.images.get(key) : null;
    }


}

