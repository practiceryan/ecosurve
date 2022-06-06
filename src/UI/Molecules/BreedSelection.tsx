import SelectBreed from "../Atoms/SelectBreed";
import BreedGalleryHooks from "../Hooks/BreedGalleryHooks";
import {ALL} from "dns";
import {Container, Group} from "@mantine/core";

const BreedSelection = () => {
    const {
        AllBreeds,
        setSelectedBreed,
        SubBreeds,
        setSubSelectedBreed
    } = BreedGalleryHooks();
    
    const all = AllBreeds();
    const sub = SubBreeds();
    
    return(
        <Group>
            <SelectBreed
                label={"Breed"}
                breeds={all.data || []}
                onChange={setSelectedBreed}
                loading={all.isLoading}
            />
            {!!sub.data && sub.data!.length > 0 &&
                <SelectBreed
                    label={"Sub Breed"}
                    breeds={sub.data || []}
                    onChange={setSubSelectedBreed}
                    loading={sub.isLoading}
                />
            }
        </Group>
    )
}

export default BreedSelection;