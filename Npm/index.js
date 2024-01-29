const chalk = require('chalk');
 const log = console.log;
// console.log(chalk.blue('Hello world!'));
// log(chalk.blue.bgRed.bold('Hello world!'));
// log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
// log(chalk.green(
//     'I am a green line ' +
//     chalk.blue.underline.bold('with a blue substring') +
//     ' that becomes green again!'
// ));
// log(`
// CPU: ${chalk.red('90%')}
// RAM: ${chalk.green('40%')}
// DISK: ${chalk.yellow('70%')}
// `);
const validator = require ("validator");
const res = validator.isEmail("prin@a.com");
const res1 = validator.is
log(res ? chalk.green.inverse(res): chalk.red.inverse(res));