import type { IResult } from '../interface/IResult.js';

export class Result {
    constructor() {}

    static sucess ( message: string ): IResult<void> {
        return {
            ok: true,
            message: message,
        }
    }

    static failure ( message: string, error?: unknown): IResult<unknown> {
        return {
            ok: false,
            message: message,
            error: error,
        }
    }

    static sucessWithValue<T> ( value: T, message: string ): IResult<T> {
        return {
            ok: true,
            message: message,
            value: value,
        }
    }
}