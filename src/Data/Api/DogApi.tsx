import {IImage} from "../../Core/Interfaces/IImage";
import {QueryFunctionContext, useQuery} from "react-query";
import axios from "axios";
import {IApiResponse} from "../../Core/Interfaces/IApiResponse";

const DogApi = () => {
    const sourceUrl = "https://dog.ceo/api/";
    const DogApiKeys = {
        all: [{ scope: 'dogApi' }] as const,
        listBreeds: () => [{...DogApiKeys.all[0], entity: 'listBreeds'}] as const,
        listSubBreeds: (breed: string) => [{...DogApiKeys.listBreeds(), breed}] as const,
        image: () => [{...DogApiKeys.all, entity: 'image'}] as const,
        imagesByBreed: (breed: string, subBreed: string | null, amount: number) => [{...DogApiKeys.image(), breed, subBreed, amount}] as const,
    }
    
    const getAllBreeds = async ({
        queryKey: [],
    }: QueryFunctionContext<ReturnType<typeof DogApiKeys['listBreeds']>>) => {
        const response = await axios.get<IApiResponse<{[key:string]:string[]}>>(`${sourceUrl}breeds/list/all`);
        return response.data.message;
    }
    
    const getSubBreeds = async ({
        queryKey: [{ breed }]
    }: QueryFunctionContext<ReturnType<typeof DogApiKeys['listSubBreeds']>>) => {
        const response = await axios.get<IApiResponse<string[]>>(`${sourceUrl}breed/${breed}/list`);
        return response.data.message;
    }
    
    const getRandomImages = async ({
        queryKey: [{ breed, subBreed, amount }]
    }: QueryFunctionContext<ReturnType<typeof DogApiKeys['imagesByBreed']>>) => {
        const url = subBreed == null ? `${sourceUrl}breed/${breed}/images/random/${amount}` : `${sourceUrl}breed/${breed}/${subBreed}/images/random/${amount}`;
        const response = await axios.get<IApiResponse<string[]>>(url);
        return response.data.message;
    }
    //TODO https://dog.ceo/dog-api/documentation/breed
    
    return {
        getAllBreeds,
        getSubBreeds,
        getRandomImages,
        DogApiKeys
    }
};

export default DogApi;