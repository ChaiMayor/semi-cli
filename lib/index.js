#!/usr/bin/env node

const {
  program
} = require('commander');

const figlet = require("figlet");
const chalk = require("chalk");
const inquirer = require("inquirer");

program.on("--help", () => {
  console.log('\r\n' + chalk.white.bgBlueBright.bold(figlet.textSync('Semi-cli', {
    font: 'Standard',
    horizontalLayout: 'fitted',
    verticalLayout: 'fitted',
    width: 180,
    whitespaceBreak: true
  })));
  console.log(`\r\nRun ${chalk.cyan(`semi --help`)} for detailed usage of given command\r\n`)
})

program
  .name('semi')
  .description('ChaiMayor 提供的快速发开组件库脚手架')
  .version('1.0.0');

program.command('create <name>')
  .description('创建一个新工程')
  .action(async (name) => {
    console.log('[ 工程名称 ] >', name)

    let { action } = await inquirer.prompt([{
      name: 'action',
      type: 'list',
      message: '目录已存在，请选择:',
      choices: [{
        name: '覆盖',
        value: 'overwrite'
      }, {
        name: '取消',
        value: false
      }]
    }])

    console.log(action);
  });

program.parse(process.argv);
