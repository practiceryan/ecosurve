import { Image } from '@mantine/core';

const BreedImageUrl= ({url}:{url: string}) => (
    <>
        <Image
            src={url}
            withPlaceholder
        />
    </>
)

export default BreedImageUrl;