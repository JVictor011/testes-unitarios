const {
  factorial,
  isPrime,
  average,
  sortArray,
  binarySearch,
} = require("./complexFunctions");

describe("Funções complexas", () => {
  describe("Fatorial", () => {
    it("deve calcular o fatorial de um número positivo", () => {
      expect(factorial(5)).toBe(120);
      expect(factorial(0)).toBe(1);
    });

    it("deve retornar undefined para números negativos", () => {
      expect(factorial(-1)).toBeUndefined();
    });
  });

  describe("Número primo", () => {
    it("deve identificar números primos corretamente", () => {
      expect(isPrime(2)).toBe(true);
      expect(isPrime(3)).toBe(true);
      expect(isPrime(17)).toBe(true);
    });

    it("deve identificar números não primos corretamente", () => {
      expect(isPrime(0)).toBe(false);
      expect(isPrime(1)).toBe(false);
      expect(isPrime(4)).toBe(false);
    });
  });

  describe("Média de um array", () => {
    it("deve calcular a média de um array de números", () => {
      expect(average([1, 2, 3, 4, 5])).toBe(3);
      expect(average([0, 10])).toBe(5);
    });

    it("deve retornar undefined para arrays vazios", () => {
      expect(average([])).toBeUndefined();
    });

    it("deve retornar undefined para entradas que não são arrays", () => {
      expect(average(5)).toBeUndefined();
      expect(average("test")).toBeUndefined();
    });
  });

  describe("Ordenação de um array", () => {
    it("deve ordenar um array de números", () => {
      expect(sortArray([5, 3, 8, 1])).toEqual([1, 3, 5, 8]);
    });

    it("deve retornar undefined para entradas que não são arrays", () => {
      expect(sortArray(5)).toBeUndefined();
    });
  });

  describe("Busca binária", () => {
    it("deve encontrar o índice do elemento alvo em um array ordenado", () => {
      expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
    });

    it("deve retornar -1 se o elemento alvo não estiver presente", () => {
      expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
    });

    it("deve retornar undefined para entradas que não são arrays", () => {
      expect(binarySearch(5, 3)).toBeUndefined();
    });
  });
});
