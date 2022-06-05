import {NumberInput} from "@mantine/core";

const NumberSelector = ({onChange, error = false}:{onChange:(value:number) => void, error?: boolean}) => {
    return (
        <NumberInput
            label={"Number of images"}
            defaultValue={1}
            onChange={onChange}
            max={50}
            error={error}
        />
    )
}

export default NumberSelector;