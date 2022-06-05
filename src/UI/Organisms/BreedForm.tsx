import BreedSelection from "../Molecules/BreedSelection";
import NumberSelector from "../Atoms/NumberSelector";
import ViewImagesButton from "../Atoms/ViewImagesButton";
import DogApi from "../../Data/Api/DogApi";
import ImagesGallery from "../Molecules/ImagesGallery";

const BreedForm = () => {
    const { ImagesByBreed } = DogApi();
    
    return (
        <>
            <div>
                <BreedSelection />
                <NumberSelector />
                <ViewImagesButton onClick={() => ImagesByBreed("")} />
            </div>
            <div>
                <ImagesGallery images={[]} />
            </div>
        </>
    )
}

export default BreedForm;