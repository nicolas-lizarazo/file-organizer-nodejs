import { pilarQuestions } from "./plugins/inquirer.plugin.js";
import { NodeFileSystem } from "./services/NodeFileSystem.js";
import { FileOrganizer } from "./core/use-cases/FileOrganizer.js";
import { getChalk } from "./plugins/chalk.plugin.js";

const requestData = async () => {
   let sourcePath = '';
   while ( sourcePath === '' ) {
      sourcePath = await pilarQuestions.promptText('ingrese la ruta que desea organizar', '');
   }
   const fileSystem = new NodeFileSystem();
   const organizer = new FileOrganizer(fileSystem, sourcePath);
   const checkResult = organizer.verifyPath();

   if ( checkResult.ok && checkResult.value ) {
      const filesCount = checkResult.value.length;

      console.log(getChalk.success(`\n¡Ruta válida! Se encontraron ${filesCount} elementos.`));

      const confirm = await pilarQuestions.confirm(`¿Estás seguro de que quieres organizar estos ${filesCount} archivos?`);

      if ( confirm ) {
            console.log(getChalk.success("Organizando archivos..."));
            
            const moveResult = organizer.moveFiles(checkResult.value);

            if ( moveResult.ok ) {
                console.log( getChalk.success( `\n✅ Éxito: ${moveResult.message}` ) );
            } else {
                console.log( getChalk.error( `\n❌ Hubo problemas: ${moveResult.message}` ) );
                console.log(moveResult.error); 
            }
        } else {
            console.log(getChalk.error("\nOperación cancelada por el usuario."));
        }

    } else {
        console.log( getChalk.error( `\nError: ${checkResult.message}` ) );
    }
}

requestData();