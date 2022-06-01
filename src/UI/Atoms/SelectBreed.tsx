﻿import {Select} from "@mantine/core";
import {IBreed} from "../../Core/Interfaces/IBreed";

const SelectBreed = ({breeds, onChange, label}:{breeds: IBreed[], onChange: (breed:IBreed) => void, label: string}) => {
    return (
        <Select
            label={label}
            placeholder={"Select"}
            onChange={(value) => {
                const foundBreed = breeds.find((b) => b.name === value);
                if(foundBreed) onChange(foundBreed);
            }}
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