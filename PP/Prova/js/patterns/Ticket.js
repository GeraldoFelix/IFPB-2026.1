export class Ticket {
    constructor(cliente, cpf, filme, seccao, assento, tipo) {
        this.cliente = cliente;
        this.cpf = cpf;
        this.filme = filme;
        this.seccao = seccao;
        this.assento = assento;
        this.tipo = tipo;
        this.id = Math.floor(Math.random() * 1000000);
    }

    getDetails() {
        return `Ingresso #${this.id} | Cliente: ${this.cliente} (CPF: ${this.cpf}) | Filme: ${this.filme} | Tipo: ${this.tipo} | Secção: ${this.seccao} | Assento: ${this.assento + 1}`;
    }
}