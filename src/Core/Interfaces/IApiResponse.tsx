export interface IApiResponse<T> {
    message: T,
    result: "success" | string
}