import chalk from "chalk";

export const getChalk = {
    success: (text: string) => chalk.green.bold(text),
    error: (text: string) => chalk.red.bold(text),
    info: (text: string) => chalk.blue(text),
    warning: (text: string) => chalk.yellow(text),
};