import type { Result } from "../utils/Result.js";

export interface IFileSystem {
    existDirectory( path: string ) : boolean;
    readDirectory( path: string ) : string[];
    obtainExtPath ( filePath: string ): string;
    movefile ( oldPath: string, newPath: string ): Result;
}