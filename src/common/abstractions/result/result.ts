export interface Errors<T> {
    code: string;

    message: string;
}

export class Result<T> {
    value: T;

    errors?: Array<Errors<T>>;

    hasError(): boolean {
        return this.errors?.length > 0;
    }
}
