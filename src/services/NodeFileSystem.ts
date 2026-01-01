import type { IFileSystem } from '../core/interface/IFileSystem.js';
import fs, { rename } from 'node:fs';
import path from 'node:path';
import { Result } from '../core/utils/Result.js';
import type { IResult } from '../core/interface/IResult.js';

export class NodeFileSystem implements IFileSystem {
    public existDirectory ( sourcePath: string ): boolean {
        return fs.existsSync( sourcePath );
    }
    
    public readDirectory ( sourcePath: string ): string[] {
        return fs.readdirSync( sourcePath );
    }

    public obtainExtPath ( filePath: string ): string {
        return path.extname( filePath );
    }

    public moveFile ( oldPath: string, newPath: string ): IResult<void> {
        try {
            fs.renameSync( oldPath, newPath );
        return Result.success( `directorio movido a ${newPath} correctamente` );
        } catch( err ) {
            return Result.failure( `error al mover directorio de ruta ${oldPath} a ${newPath}`, err );
        }
    }

    public joinPath( firstPath: string, secondPath: string ): string {
        return path.join( firstPath, secondPath );
    }

    public createDirectory( sourcePath: string ): void {
        fs.mkdirSync( sourcePath, { recursive: true } );
    }
}