import { cinemaDB } from './patterns/CinamaDataBase.js';
import { TicketFactory } from './patterns/TicketFactory.js';
import { UIController } from './ui/UIController.js';


document.addEventListener('DOMContentLoaded', () => {
    const ui = new UIController();
    cinemaDB.subscribe(ui);

    const filmeSelect = document.getElementById('filme');
    const seccaoSelect = document.getElementById('seccao');
    const btnFinalizar = document.getElementById('btn-finalizar');
    const btnNovo = document.getElementById('btn-novo');

    // Renderiza cadeiras
    ui.renderSeats(filmeSelect.value, parseInt(seccaoSelect.value));

    // Selecionar o filme
    filmeSelect.addEventListener('change', (e) => {
        ui.renderSeats(e.target.value, parseInt(seccaoSelect.value));
    });

    // Selecionar a seção
    seccaoSelect.addEventListener('change', (e) => {
        ui.renderSeats(filmeSelect.value, parseInt(e.target.value));
    });

    btnFinalizar.addEventListener('click', () => {
        const clienteInput = document.getElementById('cliente').value;
        const cpfInput = document.getElementById('cpf').value;
        const tipoInput = document.getElementById('tipoIngresso').value;
        const selection = ui.getSelectedSeat();

        if (!clienteInput.trim() || !cpfInput.trim()) {
            ui.showMessage("Preencha o nome e o CPF.", "error");
            return;
        }
        
        if (!selection) {
            ui.showMessage("Selecione um assento.", "error");
            return;
        }

        const sucesso = cinemaDB.bookSeat(selection.movie, selection.section, selection.index);
        
        if (sucesso) {
            // Criando o ingresso
            const ingresso = TicketFactory.createTicket(
                clienteInput, 
                cpfInput, 
                selection.movie, 
                selection.section, 
                selection.index, 
                tipoInput
            );
            
            ui.showMessage(`Sucesso! ${ingresso.getDetails()}`, "success");
            ui.clearSelection();
        } else {
            ui.showMessage("Erro ao processar compra.", "error");
        }
    });

    btnNovo.addEventListener('click', () => {
        document.getElementById('cliente').value = '';
        document.getElementById('cpf').value = ''; 
        ui.clearSelection();
        ui.renderSeats(filmeSelect.value, parseInt(seccaoSelect.value));
    });
    });
