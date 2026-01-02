import inquirer from 'inquirer';

export const pilarQuestions = {
    promptText: async ( message: string, defaultValue: string = '' ): Promise<string> => {
        const { result } = await inquirer.prompt<{ result: string }>([
            {
                type: 'input',
                name: 'result',
                message: message,
                default: defaultValue,
                filter: (input: string) => input.replace(/["']/g, '').trim()
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