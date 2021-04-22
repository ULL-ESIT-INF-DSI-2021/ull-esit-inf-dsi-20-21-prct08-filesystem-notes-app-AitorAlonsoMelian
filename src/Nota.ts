import * as fs from 'fs'
export class Nota {
    constructor(){

    }

    addNote(user, title, body, color){

    }

    deleteNote(){

    }

    modifyNote(){

    }
    
    listNotes(){

    }

    readNote(title){
        return fs.readFileSync('Nota.json','utf-8')
    }

    
}