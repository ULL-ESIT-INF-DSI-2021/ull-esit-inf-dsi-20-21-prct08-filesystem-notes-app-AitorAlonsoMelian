"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Nota_1 = require("./Nota");
const yargs = require("yargs");
let note = new Nota_1.Nota();
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        user: {
            describe: 'User who writes the note',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        },
        color: {
            describe: 'Note Color',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        note.addNote(argv.user, argv.title, argv.body, argv.color);
    },
});
yargs.command({
    command: "read",
    describe: "Read a note",
    builder: {
        title: {
            describe: "Note to read",
            demandOption: true,
            type: 'string'
        },
        user: {
            describe: "User who owns the note you want to read",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        note.readNote(argv.user, argv.title);
    }
});
yargs.parse();
/*function findNote(object, title){
  return object.title == title
}
let nota = new Nota()
let x = nota.readNote("Titulo")
x = JSON.parse(x)
console.log(x["note"].find(findNote))*/ 
