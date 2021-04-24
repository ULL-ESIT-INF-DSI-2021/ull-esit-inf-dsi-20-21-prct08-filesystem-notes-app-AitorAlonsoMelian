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
        let content = '{\n\t"body": "' + body + '",\n\t"color":  "' + color + '"\n}';
        let dirPath = "Notas/" + user;
        if (!fs.existsSync(path)) { // Primero se comprueba que NO exista el archivo
            if (!fs.existsSync(dirPath)) { // Si no existe el directorio del usuario, se crea.
                fs.mkdirSync("Notas/" + user);
            }
            fs.writeFileSync(path, content);
            console.log(chalk.bgGreen("El archivo ha sido creado con éxito"));
        }
        else { // Si el archivo ya existe se da un mensaje de error
            throw chalk.bgRed.white("El archivo que intenta añadir ya existe");
        }
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
