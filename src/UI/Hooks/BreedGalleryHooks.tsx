import {useEffect, useState} from "react";
import {IBreed} from "../../Core/Interfaces/IBreed";
import DogApi from "../../Data/Api/DogApi";
import {useQuery} from "react-query";

const BreedGalleryHooks = () => {
    const { DogApiKeys, getAllBreeds, getSubBreeds } = DogApi();
    const [selectedBreed, setSelectedBreed] = useState<IBreed>();
    const [selectedSubBreed, setSubSelectedBreed] = useState<IBreed>();
    const [numberOfImagesToShow, setNumberOfImagesToShow] = useState<number>(0);
    
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
        }
    )
    
    const SubBreeds = () => useQuery(
        DogApiKeys.listSubBreeds(selectedBreed?.name || ""),
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
            enabled: !!selectedBreed && selectedBreed.name.length > 0,
            placeholderData: []
        }
    )
    
    return {
        selectedBreed,
        setSelectedBreed,
        selectedSubBreed,
        setSubSelectedBreed,
        numberOfImagesToShow,
        AllBreeds,
        SubBreeds
    }
}

export default BreedGalleryHooks;