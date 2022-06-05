import {NumberInput} from "@mantine/core";

const NumberSelector = ({onChange}:{onChange:(value:number) => void}) => {
    return (
        <NumberInput
            label={"Number of images"}
            defaultValue={1}
            onChange={onChange}
            max={50}
        />
    )
}

export default NumberSelector;