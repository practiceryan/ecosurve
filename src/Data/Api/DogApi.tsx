import {IDogApi} from "./IDogApi";
import {IImage} from "../../Core/Interfaces/IImage";

const DogApi = ():IDogApi => {
    const AllBreeds = () => {
        return [];
    }
    
    const RandomImage = () => {
        const image:IImage = {
            url: ""
        }
        return image;
    }
    
    const RandomImages = (amount: number) => {
        const image:IImage = {
            url: ""
        }
        return [image];
    }
    
    const ImagesByBreed = (breed: string) => {
        const image:IImage = {
            url: ""
        }
        return [image];
    }
    
    const SubBreeds = (breed: string) => {
        return [];
    }
    
    return {
        AllBreeds,
        RandomImage,
        RandomImages,
        ImagesByBreed,
        SubBreeds
    }
};

export default DogApi;