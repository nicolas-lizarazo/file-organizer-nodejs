import { pilarQuestions } from "./plugins/inquirer.plugin.js";
import { getChalk } from "./plugins/chalk.plugin.js";
import { NodeFileSystem } from "./services/NodeFileSystem.js";
import { FileOrganizer } from "./core/use-cases/fileOrganizer.js";

const requestData = async () => {
   const path = await pilarQuestions.promptText('ingrese la ruta que desea organizar', '../../../../../../Downloads');
   const fileSystem = new NodeFileSystem();
   const directories = new FileOrganizer(fileSystem, path);
}