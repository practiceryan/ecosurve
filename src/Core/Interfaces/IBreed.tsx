export interface IBreed {
    name: string,
    images: string[] | Blob[],
    subBreed?: IBreed
}