"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nota = void 0;
const fs = require("fs");
class Nota {
    constructor() {
    }
    addNote(user, title, body, color) {
    }
    deleteNote() {
    }
    modifyNote() {
    }
    listNotes() {
    }
    readNote(title) {
        return fs.readFileSync('Nota.json', 'utf-8');
    }
}
exports.Nota = Nota;
