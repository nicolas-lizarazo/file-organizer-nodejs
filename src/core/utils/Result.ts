import type { IResult } from '../interface/IResult.js';

export class Result {
    private constructor() {}

    static success(message: string): IResult<void> {
        return {
            ok: true,
            message: message,
        }
    }

    static failure<T = void>(message: string, error?: unknown): IResult<T> {
        return {
            ok: false,
            message: message,
            error: error,
        }
    }

    static successWithValue<T>(value: T, message: string): IResult<T> {
        return {
            ok: true,
            message: message,
            value: value,
        }
    }
}