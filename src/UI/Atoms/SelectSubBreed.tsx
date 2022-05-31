import DogApi from "../../Data/Api/DogApi";
import {Loader, Select} from "@mantine/core";

const SelectSubBreed = (breed: string) => {
    const {SubBreeds} = DogApi();
    const query = SubBreeds(breed);

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

export default SelectSubBreed;