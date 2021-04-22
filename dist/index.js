"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Nota_1 = require("./Nota");
const yargs = require("yargs");
const fs = require("fs");
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
            console.log(argv.title);
            fs.writeFileSync("Nota.json", 'Prueba');
        }
    },
});
function findNote(object, title) {
    return object.title == title;
}
yargs.parse();
let nota = new Nota_1.Nota();
let x = nota.readNote("Titulo");
x = JSON.parse(x);
console.log(x["note"].find(findNote));
