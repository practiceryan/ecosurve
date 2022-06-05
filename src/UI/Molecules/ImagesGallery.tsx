import {IImage} from "../../Core/Interfaces/IImage";
import BreedImageUrl from "../Atoms/BreedImageUrl";
import {SimpleGrid} from "@mantine/core";

const ImagesGallery = ({images}:{images: IImage[]}) => (
    <SimpleGrid cols={6}>
        {
            images.map((image: IImage) => image.url && <BreedImageUrl key={image.url} url={image.url}/>)
        }
    </SimpleGrid>
)

export default ImagesGallery;
