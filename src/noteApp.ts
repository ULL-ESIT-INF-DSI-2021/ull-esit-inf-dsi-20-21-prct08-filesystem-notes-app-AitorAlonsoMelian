import chalk = require('chalk')
import * as fs from 'fs'
export class noteApp {
    constructor(){

    }

    addNote(user: any, title: any, body: any, color: any): number{
        let path: string = "Notas/" + user + "/" + title + ".json"
        let content: string = '{\n\t"body": "' + body + '",\n\t"color":  "' + color + '"\n}'

        let dirPath: string = "Notas/" + user
        if (!fs.existsSync(path)) { // Primero se comprueba que NO exista el archivo
            if (!fs.existsSync(dirPath)) { // Si no existe el directorio del usuario, se crea.
                fs.mkdirSync("Notas/" + user)
            }
            fs.writeFileSync(path,content)
            console.log(chalk.bgGreen("El archivo ha sido creado con éxito"))
            return 1
        }
        else { // Si el archivo ya existe se da un mensaje de error
            throw chalk.bgRed.white("El archivo que intenta añadir ya existe")
        }

    }

    deleteNote(user: any, title: any): number{
        let path: string = "Notas/" + user + "/" + title + ".json"
        if (fs.existsSync(path)) {
            fs.rmSync(path)
            console.log(chalk.bgGreen("El archivo ha sido borrado con éxito"))
            return 1
        }
        else {
            throw chalk.bgRed.white("El archivo que desea borrar no existe")
        }
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