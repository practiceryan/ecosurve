import {IImage} from "./IImage";

export interface IBreed {
    name: string,
    images?: IImage[],
    subBreeds?: IBreed[]
}