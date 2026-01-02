import { Result } from "../utils/Result.js";
import type { IFileSystem } from "../interface/IFileSystem.js";
import { FILE_ORGANIZER_RULES } from "../../config/FileTypes.js";
import type { IResult } from "../interface/IResult.js";

export class FileOrganizer {
    constructor(
        private readonly fileSystem: IFileSystem,
        private readonly sourcePath: string,
    ) {}

    public verifyPath = (): IResult<string[]> => {
        if (!this.fileSystem.existDirectory(this.sourcePath)) {
            return Result.failure<string[]>(`Ruta no encontrada: ${this.sourcePath}`);
        }
        const directoryFiles = this.fileSystem.readDirectory(this.sourcePath);
        return Result.successWithValue(directoryFiles, 'Archivos obtenidos');
    }

    public moveFiles = (items: string[]): IResult<void> => {
        const errors: string[] = [];
        const protectedNames = [...Object.keys(FILE_ORGANIZER_RULES), 'Carpetas', 'Otros'];

        items.forEach(itemName => {
            if ( protectedNames.includes( itemName ) ) return;

            const fullPath = this.fileSystem.joinPath( this.sourcePath, itemName );
            
            const folderName = this.getDestinationFolder( fullPath, itemName );
            const newFolderPath = this.fileSystem.joinPath( this.sourcePath, folderName );
            const newPath = this.fileSystem.joinPath( newFolderPath, itemName );

            this.ensureDirectoryExists( newFolderPath );
            const result = this.fileSystem.moveFile(fullPath, newPath);

            if ( !result.ok ) errors.push( `${itemName}: ${result.message}` );
        });

        return errors.length > 0 
            ? Result.failure("Completado con errores", errors)
            : Result.success("Organización exitosa");
    }

    private getDestinationFolder( fullPath: string, fileName: string ): string {
        if ( this.fileSystem.isDirectory( fullPath ) ) return 'Carpetas';

        const extension = this.fileSystem.obtainExtPath( fileName );
        const entry = Object.entries( FILE_ORGANIZER_RULES ).find(( [_, exts] ) => 
            ( exts as readonly string[] ).includes( extension )
        );

        return entry ? entry[0] : 'Otros';
    }

    private ensureDirectoryExists(path: string): void {
        if ( !this.fileSystem.existDirectory( path ) ) {
            this.fileSystem.createDirectory( path );
        }
    }
}