import BreedSelection from "../Molecules/BreedSelection";
import NumberSelector from "../Atoms/NumberSelector";
import ViewImagesButton from "../Atoms/ViewImagesButton";
import DogApi from "../../Data/Api/DogApi";
import ImagesGallery from "../Molecules/ImagesGallery";
import {Container, Grid, Group, Stack} from "@mantine/core";

const BreedForm = () => {
    const { ImagesByBreed } = DogApi();
    
    return (
        <Stack align={"stretch"}>
            <Group>
                <BreedSelection />
                <NumberSelector />
                <ViewImagesButton onClick={() => ImagesByBreed("")} />
            </Group>
            <Container fluid>
                <ImagesGallery images={[]} />
            </Container>
        </Stack>
    )
}

export default BreedForm;