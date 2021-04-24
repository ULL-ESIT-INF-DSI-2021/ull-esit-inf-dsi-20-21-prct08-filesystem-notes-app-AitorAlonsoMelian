import {Nota} from './Nota'
import * as chalk from 'chalk'
import * as yargs from 'yargs';
import * as fs from 'fs'

let note = new Nota()

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
    note.addNote(argv.user, argv.title, argv.body, argv.color)
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
    note.readNote(argv.user, argv.title)
  }
})


yargs.parse()
