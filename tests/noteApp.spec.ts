import 'chai';
import {expect} from 'chai';
import {noteApp} from '../src/noteApp'

let note = new noteApp()
describe('Note class', () => {
    it('A note can be created', () => {
      expect(note.addNote("Aitor","Test","Esta nota se está creando mediante un test", "yellow")).to.equal(1);
    })
    it('A note can be deleted', () => {
      expect(note.deleteNote("Aitor","Test")).to.equal(1)
    });
  })