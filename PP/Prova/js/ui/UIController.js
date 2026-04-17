import { cinemaDB } from '../patterns/CinamaDataBase.js';

export class UIController {
    constructor() {
        this.seatsGrid = document.getElementById('seats-grid');
        this.currentSectionLabel = document.getElementById('current-section');
        this.msgBox = document.getElementById('mensagem');
        this.selectedSeat = null;
    }

    update(data) {
        const currentSection = parseInt(document.getElementById('seccao').value);
        const currentMovie = document.getElementById('filme').value;
        
        if (data.status === 'booked' && parseInt(data.section) === currentSection && data.movie === currentMovie) {
            this.renderSeats(currentMovie, currentSection);
        }
    }

    renderSeats(movie, section) {
        this.seatsGrid.innerHTML = '';
        this.currentSectionLabel.innerText = section;
        const seats = cinemaDB.getSectionData(movie, section);
        
        // Limpeza de seção
        if (this.selectedSeat && (this.selectedSeat.section !== section || this.selectedSeat.movie !== movie)) {
            this.selectedSeat = null;
        }

        seats.forEach((isBooked, index) => {
            const btn = document.createElement('button');
            btn.classList.add('seat');
            btn.innerText = index + 1;

            if (isBooked) {
                btn.classList.add('booked');
                btn.disabled = true;
            } else {
                btn.onclick = () => this.selectSeat(movie, section, index);
                if (this.selectedSeat && this.selectedSeat.index === index && this.selectedSeat.section === section && this.selectedSeat.movie === movie) {
                    btn.classList.add('selected');
                }
            }

            this.seatsGrid.appendChild(btn);
        });
    }

    selectSeat(movie, section, index) {
        this.selectedSeat = { movie, section, index };
        this.renderSeats(movie, section);
    }

    getSelectedSeat() {
        return this.selectedSeat;
    }

    clearSelection() {
        this.selectedSeat = null;
        const currentSection = parseInt(document.getElementById('seccao').value);
        const currentMovie = document.getElementById('filme').value;
        this.renderSeats(currentMovie, currentSection);
    }

    showMessage(text, type) {
        this.msgBox.style.display = 'block';
        
        this.msgBox.className = `msg ${type}`;
        this.msgBox.innerText = text;

        if (this.msgTimeout) {
            clearTimeout(this.msgTimeout);
        }

        // Agenda para sumir novamente após 4 segundos
        this.msgTimeout = setTimeout(() => { 
            this.msgBox.style.display = 'none'; 
        }, 4000);
    }
}