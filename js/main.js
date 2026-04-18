import { AlunoFactory } from './factories/AlunoFactory.js';
import { Calculadora } from './services/Calculadora.js';

const ui = {
    nome: document.getElementById('nome'),
    matricula: document.getElementById('matricula'),
    notas: () => Array.from(document.querySelectorAll('.nota')).map(n => parseFloat(n.value) || 0),
    btn: document.getElementById('btnCalcular'),
    status: document.getElementById('status'),
    foto: document.getElementById('foto'),
    preview: document.getElementById('preview')
};

// Lógica da Foto
ui.foto.addEventListener('change', function() {
    const reader = new FileReader();
    reader.onload = (e) => ui.preview.src = e.target.result;
    reader.readAsDataURL(this.files[0]);
});

// Lógica Principal
ui.btn.addEventListener('click', () => {
    try {
        // Factory
        const aluno = AlunoFactory.criar(ui.nome.value, ui.matricula.value, ui.notas());

        // Observer (Configura a UI para reagir)
        aluno.adicionarObservador((res) => {
            ui.status.style.display = 'block';
            ui.status.style.backgroundColor = res.cor;
            ui.status.style.color = 'white';
            ui.status.innerText = `Média: ${res.media} - ${res.status}`;
        });

        // Singleton
        const calc = Calculadora.getInstancia();
        const media = calc.calcularMedia(aluno.notas);

        // Notificar
        aluno.notificar(media);

    } catch (err) {
        alert(err.message);
    }
});