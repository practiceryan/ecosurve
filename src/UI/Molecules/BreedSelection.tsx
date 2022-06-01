import DogApi from "../../Data/Api/DogApi";
import {useState} from "react";
import {IBreed} from "../../Core/Interfaces/IBreed";
import SelectBreed from "../Atoms/SelectBreed";
import { Loader } from "@mantine/core";

const BreedSelection = () => {
    const { AllBreeds, SubBreeds } = DogApi();
    const [selectedBreed, setSelectedBreed] = useState<IBreed>();
    const [selectedSubBreed, setSubSelectedBreed] = useState<IBreed>();
    const allBreeds = AllBreeds();
    const subBreeds = (breed: IBreed | undefined) => {
        if (breed === undefined) return;
        return SubBreeds(breed.name);
    }
    
    if (allBreeds.isLoading) return <Loader />
    
    return(
        <>
            <SelectBreed
                label={"Breed"}
                breeds={allBreeds.data || []}
                onChange={setSelectedBreed}
            />
            {subBreeds(selectedBreed)?.isLoading && <Loader />}
            {subBreeds(selectedBreed)?.isSuccess &&
                <SelectBreed
                    breeds={subBreeds(selectedBreed)!.data || []}
                    onChange={setSubSelectedBreed}
                    label={"Sub breed"}
                />
            }
        </>
    )
}

export default BreedSelection;