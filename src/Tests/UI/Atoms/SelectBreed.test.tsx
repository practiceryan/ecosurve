import {fireEvent, getByLabelText, render} from "@testing-library/react";
import SelectBreed from "../../../UI/Atoms/SelectBreed";
import {IBreed} from "../../../Core/Interfaces/IBreed";

const testBreeds:IBreed[] = [
    {
        name: "affenpinscher",
    },
    {
        name: "african",
    },
    {
        name: "airedale",
    },
    {
        name: "akita",
    },
    {
        name: "appenzeller",
    },
    {
        name: "australian",
    },
]

test('renders empty dropdown', () => {
    render(<SelectBreed breeds={[]} onChange={() => {}} label={"Breed"} loading={false} />)
})

test('renders loading icon', () => {
    render(<SelectBreed breeds={[]} onChange={() => {}} label={"Breed"} loading={true} />)
})

test('renders with options', () => {
    render(<SelectBreed breeds={testBreeds} onChange={() => {}} label={"Breed"} loading={false} />)
})

test('onchange is called', () => {
    const onChangeMock = jest.fn((breed:IBreed) => {});
    const {getByLabelText} = render(<SelectBreed breeds={testBreeds} onChange={onChangeMock} label={"Breed"} loading={false} />)
    const select = getByLabelText('Breed');
    fireEvent.change(select, 'airedale');
    expect(onChangeMock.mock.lastCall).toBeCalledWith({name: 'airedale'});
})