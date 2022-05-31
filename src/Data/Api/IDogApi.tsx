import {IBreed} from "../../Core/Interfaces/IBreed";
import {IImage} from "../../Core/Interfaces/IImage";

export interface IDogApi {
    AllBreeds: () => IBreed[]
    RandomImage: () => IImage
    RandomImages: (amount: number) => IImage[]
    ImagesByBreed: (breed:string) => IImage[]
    SubBreeds: (breed:string) => IBreed[]
}