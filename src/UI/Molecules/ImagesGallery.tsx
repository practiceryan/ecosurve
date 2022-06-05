import {IImage} from "../../Core/Interfaces/IImage";
import BreedImageUrl from "../Atoms/BreedImageUrl";

const ImagesGallery = ({images}:{images: IImage[]}) => (
    <>
        {
            images.map((image: IImage) => image.url && <BreedImageUrl url={image.url}/>)
        }
    </>
)

export default ImagesGallery;
