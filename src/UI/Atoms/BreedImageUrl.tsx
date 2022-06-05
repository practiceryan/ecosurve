import {Center, Image} from '@mantine/core';

const BreedImageUrl= ({url}:{url: string}) => (
    <Center style={{ height: '100%' }}>
        <Image
            src={url}
            withPlaceholder
        /> 
    </Center>
)

export default BreedImageUrl;