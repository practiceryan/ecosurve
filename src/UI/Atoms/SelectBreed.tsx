import {Select, Loader} from "@mantine/core";
import {IBreed} from "../../Core/Interfaces/IBreed";

const SelectBreed = (
    {breeds, onChange, label, loading}
        :
    {breeds: IBreed[], onChange: (breed:IBreed) => void, label: string, loading: boolean}) => {
    if(loading) return <Loader />
    return (
        <Select
            label={label}
            placeholder={"Select"}
            onChange={(value) => {
                const foundBreed = breeds.find((b) => b.name === value);
                console.log(value)
                if(foundBreed) onChange(foundBreed);
            }}
            searchable
            nothingFound="No options"
            data={breeds.map((breed) =>
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