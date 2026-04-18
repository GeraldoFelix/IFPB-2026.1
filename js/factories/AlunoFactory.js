import { Aluno } from '../models/Aluno.js';

export class AlunoFactory {
    static criar(nome, matricula, notas) {
        if (!nome || !matricula) throw new Error("Preencha Nome e Matrícula!");
        return new Aluno(nome, matricula, notas);
    }
}