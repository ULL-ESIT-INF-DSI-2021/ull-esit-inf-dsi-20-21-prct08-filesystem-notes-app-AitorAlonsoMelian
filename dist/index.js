"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const noteApp_1 = require("./noteApp");
const yargs = require("yargs");
let note = new noteApp_1.noteApp();
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
            type: 'string',
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string',
        },
        color: {
            describe: 'Note Color',
            demandOption: true,
            type: 'string',
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
yargs.command({
    command: "delete",
    describe: "Delete a note",
    builder: {
        title: {
            describe: "Note to delete",
            demandOption: true,
            type: 'string'
        },
        user: {
            describe: "User who owns the note you want to delete",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        note.deleteNote(argv.user, argv.title);
    }
});
yargs.parse();
