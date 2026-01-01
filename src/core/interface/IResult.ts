// patron result object

export interface IResult<T> {
    ok: boolean;
    message: string;
    value?: T;
    error?: unknown;
}