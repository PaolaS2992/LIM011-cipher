global.window = global;
require('../src/cipher');
/* global cipher */
describe('cipher', () => {
  it('debería ser un object', () => {
    expect(typeof cipher).toBe('object');
  });
  describe('cipher.encode', () => {
    it('debería ser una función', () => {
      expect(typeof cipher.encode).toBe('function');
    });
    it('debería retornar "HIJKLM" para "ABCDEF" con offset 33', () => {
      expect(cipher.encode(33, 'ABCDEF')).toBe('HIJKLM');
    });
    it('debería retornar "hijklm" para "abcdef" with offset 33', () => {
      expect(cipher.encode(33, 'abcdef')).toBe('hijklm');
    });
    it('debería retornar " !@" para " !@"', () => {
      expect(cipher.encode(33, ' !@')).toBe(' !@');
    });
  });
  describe('cipher.decode', () => {
    it('debería ser una función', () => {
      expect(typeof cipher.decode).toBe('function');
    });
    it('debería retornar "ABCDEF" para "HIJKLM" con offset 33', () => {
      expect(cipher.decode(33, 'HIJKLM')).toBe('ABCDEF');
    });
    it('debería retornar "abcdef" para "hijklm" with offset 33', () => {
      expect(cipher.decode(33, 'hijklm')).toBe('abcdef');
    });
    it('debería retornar " !@" para " !@"', () => {
      expect(cipher.decode(33, ' !@')).toBe(' !@');
    });
  });
});
