import inquirer from 'inquirer';

// main questions, plugin para evitar acoplamiento de inquirer, se tienen preguntas al usuario, interaccion
export const impotantQuestions = {
    // input text, objeto que sera descentralizado, esto conlleva un proceso propio de pedir un valor y regresarlo para poder usarlo
    // se da un mensaje y en defaultValue se tiene la ruta, con esto si no se escribe nada, se tomara el valor por defecto ''
    inputText: async ( message: string, defaultValue: string = '' ) => {
        // result porque es el nombre que se dio a la funcion que realiza inquirer con prompt, el resultado es un objeto result
        const { result } = await inquirer.prompt([
            {
                type: 'input',
                name: 'result',
                message: message,
                default: defaultValue,
            }
        ])
        return result;
    },
    confirm: async ( message: string ) => {
        const { ok } = await inquirer.prompt([
            {
                type: 'confirm',
                name: 'ok',
                message: message,
            }
        ])    
        return ok;
    },
}