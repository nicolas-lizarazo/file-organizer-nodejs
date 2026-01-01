import type { IFileSystem } from '../core/interface/IFileSystem.js';
import fs, { rename } from 'node:fs';
import path from 'node:path';
import { Result } from '../core/utils/Result.js';

export class NodeFileSystem implements IFileSystem {
    public existDirectory ( path: string ): boolean {
        return fs.existsSync( path );
    }
    
    public readDirectory ( path: string ): string[] {
        return fs.readdirSync( path );
    }

    public obtainExtPath ( filePath: string ): string {
        return path.extname( filePath );
    }

    public movefile ( oldPath: string, newPath: string ): Result {
        try {
            fs.renameSync( oldPath, newPath );
        return Result.sucess( `directorio movido a ${newPath} correctamente` );
        } catch( err ) {
            return Result.failure( `error al mover directorio de ruta ${oldPath} a ${newPath}`, err );
        }
    }
}