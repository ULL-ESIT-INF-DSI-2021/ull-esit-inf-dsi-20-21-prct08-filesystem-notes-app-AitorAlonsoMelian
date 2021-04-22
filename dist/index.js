"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
const yargs = require("yargs");
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        if (typeof argv.title === 'string') {
            console.log("A");
        }
    },
});
yargs.parse();
console.log(chalk.bgCyanBright("This text is made with Chalk"));
