import {act, fireEvent, getByLabelText, render, RenderResult, screen} from "@testing-library/react";
import SelectBreed from "../../../UI/Atoms/SelectBreed";
import {IBreed} from "../../../Core/Interfaces/IBreed";
import userEvent from "@testing-library/user-event";
import {renderWithAct} from "../../Functions/RenderWithAct";

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

test('renders empty dropdown', async () => {
    await renderWithAct(<SelectBreed breeds={[]} onChange={() => {}} label={"Breed"} loading={false}/>);
    await fireEvent.click(screen.getByLabelText('Breed'));
    expect(screen.getAllByRole('option')).toThrowError(); // TODO
})

test('renders with options', async () => {
    await renderWithAct(<SelectBreed breeds={testBreeds} onChange={() => {}} label={"Breed"} loading={false}/>);
    await fireEvent.click(screen.getByLabelText('Breed'));
    expect(screen.getAllByRole('option')).toHaveLength(6);
})

test('onchange is called', () => {
    const onChangeMock = jest.fn((breed:IBreed) => {});
    const { getByLabelText } = render(<SelectBreed breeds={testBreeds} onChange={onChangeMock} label={"Breed"} loading={false} />)
})

test('label should be subBreed', () => {
    render(<SelectBreed breeds={[]} onChange={() => {}} label={"Sub Breed"} loading={false} />)
});