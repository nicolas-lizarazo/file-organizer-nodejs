import { Result } from "../utils/Result.js";
import type { IFileSystem } from "../interface/IFileSystem.js";
import { FILE_ORGANIZER_RULES } from "../../config/FileTypes.js";
import type { IResult } from "../interface/IResult.js";

export class FileOrganizer {
    // private fileSystem: IFileSystem;

    // constructor(fs: IFileSystem) {
    //     this.fileSystem = fs; 
    // }

    // atajo typescript, priivate readonly declara y asigna en una sola linea un atributo
    constructor(
        private readonly fileSystem: IFileSystem,
        private readonly sourcePath: string,
    ){}

    public verifyPath = (): IResult<string[]> => {
        if ( this.fileSystem.existDirectory( this.sourcePath ) ) {
            const directoryFiles = this.fileSystem.readDirectory( this.sourcePath );
            return Result.successWithValue( directoryFiles, 'archivos obtenidos' );
        } else return Result.failure<string[]>(`Error, no se ha encontrado la ruta ${this.sourcePath}`);
    }
    
    public moveFiles = (directories: string[]): IResult<void> => {
        let errors: string[] = [];
        directories.forEach( fileName => {
            let pathDirectory = this.fileSystem.obtainExtPath( fileName );
            // devuelve una matriz de matrices ( array de pares ) , encontrar coincidencia, destructurar arreglo bidimencional que tiene nombre y extenciones en forma de arreglo ['imagenes',[['jpg'],['png']]] en dos como si se hiciera item[0], item
            const folderName = Object.entries(FILE_ORGANIZER_RULES).find(( [folder, extensions] ) => {
                return (extensions as readonly string[]).includes(pathDirectory);
            })?.[0] || 'Otros';

            const oldPath = this.fileSystem.joinPath( this.sourcePath, fileName );
            const newFolderPath = this.fileSystem.joinPath( this.sourcePath, folderName );
            const newPath = this.fileSystem.joinPath( newFolderPath, fileName );

            if ( !this.fileSystem.existDirectory( newFolderPath ) ) {
                this.fileSystem.createDirectory( newFolderPath );
            }

            const result = this.fileSystem.moveFile( oldPath, newPath );

            if ( !result.ok ) {
                errors.push(`${fileName}: ${result.message}`)
            }
        })

        if ( errors.length > 0 ) {
            return Result.failure("Proceso completado con algunos errores", errors);
        }

        return Result.success("Todos los archivos se movieron exitosamente");
    }
}


/* 
extensiones_map = {
    'Documentos': ['.pdf', '.docx', '.txt', '.xlsx'],
    'Imagenes': ['.jpg', '.png', '.gif', '.webp'],
    'Videos': ['.mp4', '.mkv', '.mov'],
    'Musica': ['.mp3', '.wav', '.flac'],
    'Programacion': ['.py', '.js', '.html', '.css', '.cpp'],
    'Comprimidos': ['.zip', '.rar', '.7z'],
    'Instaladores': ['.exe', '.msi', '.dmg']
}
*/