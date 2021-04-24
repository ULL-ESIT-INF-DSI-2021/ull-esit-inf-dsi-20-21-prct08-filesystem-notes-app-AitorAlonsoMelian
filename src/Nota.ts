import chalk = require('chalk')
import * as fs from 'fs'
export class Nota {
    constructor(){

    }

    addNote(user, title, body, color){
        let path: string = "Notas/" + user + "/" + title + ".json"
        //console.log(path)
        let content: string = '{\n\t"body": "' + body + '",\n\t"color":  "' + color + '"\n}'
        //console.log(JSON.parse(content))
        try {
            fs.mkdirSync("Notas/" + user)
        }
        catch{}
        fs.writeFileSync(path,content)
    }

    deleteNote(){

    }

    modifyNote(){

    }
    
    listNotes(){

    }

    readNote(user, title){
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