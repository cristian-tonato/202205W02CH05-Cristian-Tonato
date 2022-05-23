import { juegoDeLaVida, nacen } from "./juego";

describe('Test del juego de la vida', () => {
    test('si el array es [[1, 2],[2, 2],[3, 2]], resultado deberia ser undefined ', () => {
        const arrayCelula =[
        [1, 2],
        [2, 2],
        [3, 2],  
        ];
        expect(juegoDeLaVida(arrayCelula)).tobe(undefined)
    });
});
describe("En nacen", () => {
    test("si ejeX = 2, ejeY = 2, resultado debe ser[[1, 2], [3, 2]]", () => {
      expect(nacen(2, 2)).toStrictEqual([
        [1, 2],
        [3, 1],
        [3, 3],
      ]);
    });
    test("si el ejeX = -1, ejeY = -1, resultado esoerado de []", () => {
      expect(nacen(-1, -1)).toEqual([]);
    });
  });