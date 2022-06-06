import NumberSelector from "../Atoms/NumberSelector";
import ViewImagesButton from "../Atoms/ViewImagesButton";
import ImagesGallery from "../Molecules/ImagesGallery";
import {Container, Divider, Group, Loader, Stack} from "@mantine/core";
import BreedGalleryHooks from "../Hooks/BreedGalleryHooks";
import SelectBreed from "../Atoms/SelectBreed";
import {useEffect} from "react";

const BreedForm = () => {
    const {
        AllBreeds,
        setSelectedBreed,
        SubBreeds,
        setSubSelectedBreed,
        setNumberOfImagesToShow,
        GetImages,
        numberOfImagesToShow,
        errors,
    } = BreedGalleryHooks();

    const all = AllBreeds();
    const sub = SubBreeds();
    const { data: images, refetch, isLoading } = GetImages();
    
    return (
        <Stack align={"stretch"}>
            <Group align={"end"}>
                <Group>
                    <SelectBreed
                        label={"Breed"}
                        breeds={all.data || []}
                        onChange={setSelectedBreed}
                        loading={all.isLoading}
                        error={errors.includes("breed")}
                    />
                    {!!sub.data && sub.data!.length > 0 &&
                        <SelectBreed
                            label={"Sub Breed"}
                            breeds={sub.data || []}
                            onChange={setSubSelectedBreed}
                            loading={sub.isLoading}
                            error={errors.includes("subBreed")}
                        />
                    }
                </Group>
                <NumberSelector
                    onChange={setNumberOfImagesToShow}
                    error={errors.includes("amountOfImages")}
                />
                <ViewImagesButton onClick={() => {
                    refetch();
                }} />
            </Group>
            <Divider />
            <Container
                fluid
            >
                {isLoading && <Loader />}
                {
                    images && <ImagesGallery images={images || []} />
                }
            </Container>
        </Stack>
    )
}

export default BreedForm;