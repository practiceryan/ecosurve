import {Loader, Select} from "@mantine/core";
import DogApi from "../../Data/Api/DogApi";

const SelectBreed = () => {
    const {AllBreeds} = DogApi();
    const query = AllBreeds();
    
    if (query.isLoading) {
        return <Loader />
    }
    
    return (
        <Select
            label={"Breed"}
            placeholder={"Select"}
            data={query.data!.map((breed) =>
            {
                return {
                    value: breed.name,
                    label: breed.name
                }
            })}
        />
    )
}

export default SelectBreed;