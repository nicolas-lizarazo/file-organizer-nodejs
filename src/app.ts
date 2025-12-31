import inquirer from 'inquirer';
import chalk from 'chalk';



// const main = async () => {
//   const respuestas = await inquirer.prompt([
//     {
//       type: 'input',
//       name: 'nombre',
//       message: '¿Cuál es tu nombre?',
//       validate: (input) => {
//         return input.length > 0 ? true : 'Por favor, escribe un nombre.';
//       }
//     },
//     {
//       type: 'list',
//       name: 'lenguaje',
//       message: '¿Cuál es tu lenguaje favorito?',
//       choices: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Rust'],
//     },
//     {
//       type: 'confirm',
//       name: 'confirmacion',
//       message: '¿Estás seguro de que esta información es correcta?',
//       default: true
//     }
//   ]);

//   console.log('\n--- Resumen del Perfil ---');
//   if (respuestas.confirmacion) {
//     console.log(chalk.bgBlue.white(`Hola ${respuestas.nombre}, veo que te gusta ${respuestas.lenguaje}. ¡Excelente elección!`));
//   } else {
//     console.log(chalk.bgRedBright.white('Operación cancelada por el usuario.'));
//   }
// };

// main();