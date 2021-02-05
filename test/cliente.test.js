const Cliente = require("../modelos/cliente.js");

test('Ao digitar um cpf inválido o sistema precisa retornar false', () => {
  let cliente = new Cliente('Danilo', '23u03u23089309')
  expect(cliente.validarCpf()).toBe(false);
});

test('Ao digitar um cpf inválido (11111111111) o sistema precisa retornar false', () => {
  let cliente = new Cliente('Danilo', '11111111111')
  expect(cliente.validarCpf()).toBe(false);
});

test('Ao digitar um cpf inválido (1111111111) o sistema precisa retornar false', () => {
  let cliente = new Cliente('Danilo', '1111111111')
  expect(cliente.validarCpf()).toBe(false);
});

test('Ao digitar um cpf inválido (1111111111111) o sistema precisa retornar false', () => {
  let cliente = new Cliente('Danilo', '1111111111111')
  expect(cliente.validarCpf()).toBe(false);
});

test('Ao digitar um cpf válido (255.581.510-48) o sistema precisa retornar true', () => {
  let cliente = new Cliente('Danilo', '255.581.510-48')
  expect(cliente.validarCpf()).toBe(true);
});

test('Ao digitar um cpf válido (meu cep: 255.581.510-48) o sistema precisa retornar true', () => {
  let cliente = new Cliente('Danilo', 'meu cep: 255.581.510-48')
  expect(cliente.validarCpf()).toBe(true);
});

test('Ao digitar um CPF undefined precisa retornar false', () => {
  let cliente = new Cliente('Danilo', undefined)
  expect(cliente.validarCpf()).toBe(false);
});

