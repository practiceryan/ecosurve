import {IImage} from "../../Core/Interfaces/IImage";
import {QueryFunctionContext, useQueries, useQuery, useQueryClient} from "react-query";
import axios from "axios";
import {IBreed} from "../../Core/Interfaces/IBreed";
import {IApiResponse} from "../../Core/Interfaces/IApiResponse";

const DogApi = () => {
    const queryClient = useQueryClient();
    const sourceUrl = "https://dog.ceo/api/";
    const DogApiKeys = {
        all: [{ scope: 'dogApi' }] as const,
        listBreeds: () => [{...DogApiKeys.all[0], entity: 'listBreeds'}] as const,
        listSubBreeds: (breed: string) => [{...DogApiKeys.listBreeds(), breed}] as const,
        image: () => [{...DogApiKeys.all, entity: 'image'}] as const,
        images: (amount: number) => [{...DogApiKeys.image(), amount}] as const,
        imagesByBreed: (breed: string) => [{...DogApiKeys.image(), breed}] as const,
    }
    
    const getAllBreeds = async ({
        queryKey: [],
    }: QueryFunctionContext<ReturnType<typeof DogApiKeys['listBreeds']>>) => {
        const response = await axios.get<IApiResponse<{[key:string]:string[]}>>(`${sourceUrl}breeds/list/all`);
        return response.data.message;
    }
    
    const getRandomImage = async ({
        queryKey: [],
    }: QueryFunctionContext<ReturnType<typeof DogApiKeys['image']>>) => {
        const response = await axios.get<IApiResponse<string>>(`${sourceUrl}breeds/image/random`);
        return response.data.message;
    }
    
    const getRandomImages = async ({
        queryKey: [{ amount }]
    }: QueryFunctionContext<ReturnType<typeof DogApiKeys['images']>>) => {
        const response = await axios.get<IApiResponse<string[]>>(`${sourceUrl}breeds/image/random/${amount}`);
        return response.data.message;
    }
    
    const getImagesByBreed = async ({
        queryKey: [{ breed }]
    }: QueryFunctionContext<ReturnType<typeof DogApiKeys['imagesByBreed']>>) => {
        const response = await axios.get<IApiResponse<string[]>>(`${sourceUrl}breed/${breed}/images`);
        return response.data.message;
    }
    
    const getSubBreeds = async ({
        queryKey: [{ breed }]
    }: QueryFunctionContext<ReturnType<typeof DogApiKeys['listSubBreeds']>>) => {
        const response = await axios.get<IApiResponse<string[]>>(`${sourceUrl}breed/${breed}/list`);
        return response.data.message;
    }
    //TODO https://dog.ceo/dog-api/documentation/breed
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
    
    
    const RandomImage = () => useQuery(
        DogApiKeys.image(),
        getRandomImage,
        {
            select: data => {
                const image:IImage = {
                    url: data
                }
                return image;
            } 
        }
    )
    
    const RandomImages = (amount: number) =>  useQuery(
        DogApiKeys.images(amount),
        getRandomImages,
        {
            select: data => {
                return data.map(i => {
                    const image: IImage = {
                        url: i
                    }
                    return image;
                })
            },
            enabled: amount > 50
        }
    )
    
    const ImagesByBreed = (breed: string) => useQuery(
        DogApiKeys.imagesByBreed(breed),
        getImagesByBreed,
        {
            select: data => {
                return data.map(i => {
                    const image:IImage = {
                        url: i
                    }
                    return image;
                })
            }
        }
    )
    
    const SubBreeds = (breed: string) => useQuery(
        DogApiKeys.listSubBreeds(breed),
        getSubBreeds,
        {
            select: data => {
                return data.map(i => {
                    const breed: IBreed = {
                        name: i
                    }
                    return breed;
                })
            },
            enabled: breed.length > 0
        }
    )
    
    return {
        AllBreeds,
        RandomImage,
        RandomImages,
        ImagesByBreed,
        SubBreeds
    }
};

export default DogApi;