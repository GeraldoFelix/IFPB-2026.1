export class Calculadora {
    static #instancia;

    constructor() {
        if (Calculadora.#instancia) return Calculadora.#instancia;
        Calculadora.#instancia = this;
    }

    static getInstancia() {
        return new Calculadora();
    }

    calcularMedia(notas) {
        const soma = notas.reduce((acc, n) => acc + n, 0);
        return (soma / notas.length).toFixed(2);
    }
}