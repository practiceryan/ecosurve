import BreedSelection from "../Molecules/BreedSelection";
import NumberSelector from "../Atoms/NumberSelector";
import ViewImagesButton from "../Atoms/ViewImagesButton";
import DogApi from "../../Data/Api/DogApi";
import ImagesGallery from "../Molecules/ImagesGallery";
import {Grid} from "@mantine/core";

const BreedForm = () => {
    const { ImagesByBreed } = DogApi();
    
    return (
        <>
            <Grid align="center">
                <Grid.Col span={3}>
                    <BreedSelection />
                </Grid.Col>
                <Grid.Col span={3}>
                    <NumberSelector />
                </Grid.Col>
                <Grid.Col span={3}>
                    <ViewImagesButton onClick={() => ImagesByBreed("")} />
                </Grid.Col>
            </Grid>
            <div>
                <ImagesGallery images={[]} />
            </div>
        </>
    )
}

export default BreedForm;