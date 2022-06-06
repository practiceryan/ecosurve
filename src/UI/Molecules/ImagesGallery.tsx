import {IImage} from "../../Core/Interfaces/IImage";
import BreedImageUrl from "../Atoms/BreedImageUrl";
import {Paper, SimpleGrid} from "@mantine/core";

const ImagesGallery = ({images}:{images: IImage[]}) => (
    <SimpleGrid
        cols={6}
        sx={(theme) => ({
            backgroundColor: theme.colors.gray[0],
        })}
        p={"lg"}
    >
        {
            images.map((image: IImage) => image.url && <Paper p="md" withBorder><BreedImageUrl key={image.url} url={image.url}/></Paper>)
        }
    </SimpleGrid>
)

export default ImagesGallery;
