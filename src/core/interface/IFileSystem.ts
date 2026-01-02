import type { Result } from "../utils/Result.js";
import type { IResult } from "./IResult.js";

export interface IFileSystem {
    existDirectory( path: string ) : boolean;
    readDirectory( path: string ) : string[];
    obtainExtPath ( filePath: string ): string;
    moveFile ( oldPath: string, newPath: string ): IResult<void>;
    joinPath ( firstPath: string, secondPath: string ): string;
    createDirectory( sourcePath: string ): void;
    isDirectory( sourcePath: string ): boolean;
}