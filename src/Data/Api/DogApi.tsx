import {IImage} from "../../Core/Interfaces/IImage";
import {QueryFunctionContext, useQuery} from "react-query";
import axios from "axios";
import {IBreed} from "../../Core/Interfaces/IBreed";

const DogApi = () => {
    const sourceUrl = "https://dog.ceo/api/";
    const DogApiKeys = {
        all: [{ scope: 'dogApi' }] as const,
        listBreeds: () => [{...DogApiKeys.all[0], entity: 'listBreeds'}] as const,
        listSubBreeds: (breed: string) => [{...DogApiKeys.listBreeds(), breed}] as const,
        image: () => [{...DogApiKeys.all, entity: 'image'}] as const,
        imagesByBreed: (breed: string) => [{...DogApiKeys.image(), breed}] as const,
    }
    
    const getAllBreeds = async ({
        queryKey: [],
    }: QueryFunctionContext<ReturnType<typeof DogApiKeys['listBreeds']>>) => {
        const response = await axios.get(`${sourceUrl}breeds/list/all`);
        return response.data;
    }
    
    const AllBreeds = () => useQuery(
            DogApiKeys.listBreeds(),
            getAllBreeds,
            {
                select: data => Object.keys(data).map((key: string) => {
                    const breed:IBreed = {
                        name: key,
                        subBreeds: data[key].map((breedName:string ):IBreed => {
                            return {
                                name: breedName
                            };
                        })
                    }
                    return breed;
                })
            });
    
    
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