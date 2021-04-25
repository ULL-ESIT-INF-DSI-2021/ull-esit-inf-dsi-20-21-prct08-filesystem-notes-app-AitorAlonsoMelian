import 'chai';
import {expect} from 'chai';
import {noteApp} from '../src/noteApp'
import chalk = require('chalk')

let note = new noteApp()
describe('Note class', () => {
    it('Se puede crear una nota', () => {
      expect(note.addNote("TestUser","Test","Esta nota se está creando mediante un test", "yellow")).to.equal(1);
    })

    it('Se puede controlar una excepción al intentar crear una nota igual a la anterior', () => {
      expect(() => {note.addNote("TestUser","Test","Esta nota se está creando mediante un test", "yellow")}).to.throw(chalk.bgRed.white('El archivo que intenta añadir ya existe'));
    })

    it('Se puede crear una nota', () => {
      expect(note.addNote("TestUser","Test2","Esta nota es azul", "blue")).to.equal(1);
    })

    it('Se puede crear una nota', () => {
      expect(note.addNote("TestUser","Test3","Esta nota es verde", "green")).to.equal(1);
    })

    it('Se puede crear una nota', () => {
      expect(note.addNote("TestUser","Test4","Esta nota NO es verde", "red")).to.equal(1);
    })

    it('Se puede modificar una nota', () => {
      expect(note.modifyNote("TestUser","Test", "A esta nota le queda muy poco tiempo de vida :(", "blue")).to.equal(1)
    });

    it('Se puede controlar una excepción al intentar modificar una nota no existente', () => {
      expect(() => {note.modifyNote("TestUser","Esta nota no existe :)","Esta nota se está creando mediante un test", "yellow")}).to.throw(chalk.bgRed.white("El archivo que desea modificar no existe"));
    })

    it('Se pueden listar las notas de un usuario', () => {
      expect(note.listNotes("TestUser")).to.equal(1)
    });

    it('Se puede leer una nota de un usuario', () => {
      expect(note.readNote("TestUser", "Test")).to.equal(1)
    });

    it('Se puede leer una nota de un usuario', () => {
      expect(note.readNote("TestUser", "Test2")).to.equal(1)
    });

    it('Se puede leer una nota de un usuario', () => {
      expect(note.readNote("TestUser", "Test3")).to.equal(1)
    });

    it('Se puede leer una nota de un usuario', () => {
      expect(note.readNote("TestUser", "Test4")).to.equal(1)
    });

    it('Se puede borrar una nota', () => {
      expect(note.deleteNote("TestUser","Test")).to.equal(1)
    });

    it('Se puede borrar una nota', () => {
      expect(note.deleteNote("TestUser","Test2")).to.equal(1)
    });

    it('Se puede borrar una nota', () => {
      expect(note.deleteNote("TestUser","Test3")).to.equal(1)
    });

    it('Se puede borrar una nota', () => {
      expect(note.deleteNote("TestUser","Test4")).to.equal(1)
    });

    it('Se puede controlar una excepción al intentar borrar una nota no existente', () => {
      expect(() => {note.deleteNote("TestUser","Esta nota no existe tampoco")}).to.throw(chalk.bgRed.white("El archivo que desea borrar no existe"));
    })
  })