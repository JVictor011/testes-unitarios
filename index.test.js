const { sum } = require("./index");

describe("Funções matematicas", () => {
  beforeAll(() => {
    console.log("Iniciando os testes");
  });
  afterAll(() => {
    console.log("Finalizando os testes");
  });
  beforeEach(() => {
    console.log("soma 1+2");
  });
  it("somar 2 numeros", () => {
    expect(sum(1, 2)).toBe(3);
  });
  beforeEach(() => {
    console.log("soma 2+3");
  });
  it("somar 2 numeros", () => {
    expect(sum(2, 3)).toBe(5);
  });
});
