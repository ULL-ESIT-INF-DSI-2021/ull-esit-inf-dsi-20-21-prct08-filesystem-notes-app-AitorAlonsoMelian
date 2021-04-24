"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nota = void 0;
const chalk = require("chalk");
const fs = require("fs");
class Nota {
    constructor() {
    }
    addNote(user, title, body, color) {
        let path = "Notas/" + user + "/" + title + ".json";
        //console.log(path)
        let content = '{\n\t"body": "' + body + '",\n\t"color":  "' + color + '"\n}';
        //console.log(JSON.parse(content))
        try {
            fs.mkdirSync("Notas/" + user);
        }
        catch { }
        fs.writeFileSync(path, content);
    }
    deleteNote() {
    }
    modifyNote() {
    }
    listNotes() {
    }
    readNote(user, title) {
        let path = "Notas/" + user + "/" + title + ".json";
        let content = fs.readFileSync(path, 'utf-8');
        content = JSON.parse(content);
        let body = content["body"];
        let color = content["color"];
        switch (color) {
            case "green":
                console.log(chalk.green(body));
                break;
            case "red":
                console.log(chalk.red(body));
                break;
            case "blue":
                console.log(chalk.blue(body));
                break;
            case "yellow":
                console.log(chalk.yellow(body));
                break;
        }
    }
}
exports.Nota = Nota;
