export class Aluno {
    constructor(nome, matricula, notas) {
        this.nome = nome;
        this.matricula = matricula;
        this.notas = notas;
        this.observadores = [];
    }

    adicionarObservador(callback) {
        this.observadores.push(callback);
    }

    notificar(media) {
        const aprovado = media >= 7;
        const dados = {
            media,
            status: aprovado ? "APROVADO" : "REPROVADO",
            cor: aprovado ? "#28a745" : "#dc3545"
        };
        this.observadores.forEach(obs => obs(dados));
    }
}