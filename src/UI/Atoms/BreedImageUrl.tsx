import { Image } from '@mantine/core';

const BreedImageUrl= ({url}:{url: string}) => (
    <>
        <Image
            src={url}
        />
    </>
)

export default BreedImageUrl;