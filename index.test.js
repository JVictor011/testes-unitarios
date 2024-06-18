const {
  sum,
  subtract,
  multiply,
  divide,
  inOneHour,
  inOneWeek,
} = require("./index");

describe("Funções matemáticas", () => {
  beforeAll(() => {
    console.log("Iniciando os testes de funções matemáticas");
  });

  afterAll(() => {
    console.log("Finalizando os testes de funções matemáticas");
  });

  it("deve somar 2 números positivos", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("deve somar 2 números negativos", () => {
    expect(sum(-1, -2)).toBe(-3);
  });

  it("deve somar um número positivo e um número negativo", () => {
    expect(sum(-1, 2)).toBe(1);
  });

  it("deve subtrair 2 números", () => {
    expect(subtract(5, 3)).toBe(2);
  });

  it("deve subtrair um número negativo de um positivo", () => {
    expect(subtract(5, -3)).toBe(8);
  });

  it("deve subtrair dois números negativos", () => {
    expect(subtract(-5, -3)).toBe(-2);
  });

  it("deve multiplicar 2 números positivos", () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it("deve multiplicar um número positivo e um número negativo", () => {
    expect(multiply(-2, 3)).toBe(-6);
  });

  it("deve multiplicar 2 números negativos", () => {
    expect(multiply(-2, -3)).toBe(6);
  });

  it("deve multiplicar qualquer número por zero", () => {
    expect(multiply(2, 0)).toBe(0);
  });

  it("deve dividir 2 números positivos", () => {
    expect(divide(6, 3)).toBe(2);
  });

  it("deve dividir um número positivo por um número negativo", () => {
    expect(divide(6, -3)).toBe(-2);
  });

  it("deve dividir 2 números negativos", () => {
    expect(divide(-6, -3)).toBe(2);
  });

  it("deve lançar erro ao dividir por zero", () => {
    expect(() => divide(6, 0)).toThrow("A divisão por zero não é permitida.");
  });
});

describe("Funções de tempo", () => {
  beforeAll(() => {
    console.log("Iniciando os testes de funções de tempo");
  });

  afterAll(() => {
    console.log("Finalizando os testes de funções de tempo");
  });

  it("deve retornar o timestamp de uma hora a partir de agora", () => {
    const dataRealNow = Date.now.bind(global.Date);
    global.Date.now = () => 0;
    expect(inOneHour()).toBe(3600000);
    global.Date.now = dataRealNow;
  });

  it("deve retornar o timestamp de uma semana a partir de agora", () => {
    const dataRealNow = Date.now.bind(global.Date);
    global.Date.now = () => 0;
    expect(inOneWeek()).toBe(7 * 24 * 60 * 60 * 1000);
    global.Date.now = dataRealNow;
  });
});
