import {IDogApi} from "./IDogApi";
import {IImage} from "../../Core/Interfaces/IImage";

const DogApi = ():IDogApi => {
    const sourceUrl = "https://dog.ceo/api/";
    const DogApiKeys = {
        all: [{ scope: 'dogApi' }] as const,
        listBreeds: () => [...DogApiKeys.all, 'listBreeds'] as const,
        listSubBreeds: (breed: string) => [...DogApiKeys.listBreeds(), {breed}] as const,
        image: () => [...DogApiKeys.all, 'image'] as const,
        imagesByBreed: (breed: string) => [...DogApiKeys.image(), {breed}] as const,
    }
    
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