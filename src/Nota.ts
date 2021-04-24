import chalk = require('chalk')
import * as fs from 'fs'
export class Nota {
    constructor(){

    }

    addNote(user: any, title: any, body: any, color: any){
        let path: string = "Notas/" + user + "/" + title + ".json"
        let content: string = '{\n\t"body": "' + body + '",\n\t"color":  "' + color + '"\n}'

        let dirPath: string = "Notas/" + user
        if (!fs.existsSync(path)) { // Primero se comprueba que NO exista el archivo
            if (!fs.existsSync(dirPath)) { // Si no existe el directorio del usuario, se crea.
                fs.mkdirSync("Notas/" + user)
            }
            fs.writeFileSync(path,content)
            console.log(chalk.bgGreen("El archivo ha sido creado con éxito"))
        }
        else { // Si el archivo ya existe se da un mensaje de error
            throw chalk.bgRed.white("El archivo que intenta añadir ya existe")
        }

    }

    deleteNote(){

    }

    modifyNote(){

    }
    
    listNotes(){

    }

    readNote(user: any, title: any){
        let path: string = "Notas/" + user + "/" + title + ".json"
        let content: string = fs.readFileSync(path,'utf-8')
        content = JSON.parse(content)

        let body: string = content["body"]
        let color: string = content["color"]

        switch(color) {
            case "green": 
                console.log(chalk.green(body))
                break
            case "red":
                console.log(chalk.red(body))
                break
            case "blue":
                console.log(chalk.blue(body))
                break
            case "yellow":
                console.log(chalk.yellow(body))
                break
        }
    }

    
}