import { Result } from "../utils/Result.js";
import type { IFileSystem } from "../interface/IFileSystem.js";

export class FileOrganizer {
    // private fileSystem: IFileSystem;

    // constructor(fs: IFileSystem) {
    //     this.fileSystem = fs; 
    // }

    // atajo typescript, priivate readonly declara y asigna en una sola linea un atributo
    constructor(
        private readonly fileSystem: IFileSystem,
        private readonly path: string,
    ){}

    public verifyPath = (): Result => {
        if ( this.fileSystem.existDirectory( this.path ) ) {
            const directoryFiles = this.fileSystem.readDirectory( this.path );
            return Result.sucessWithValue( directoryFiles, `archivos obtenidos correctamente de la ruta ${this.path}` );
        } else return Result.failure(`Error, no se ha encontrado la ruta ${this.path}`);
    }
    
    public movefiles = () => {
    
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