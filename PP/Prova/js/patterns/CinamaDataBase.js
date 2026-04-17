import { Subject } from './Subject.js';

class CinemaDatabase extends Subject {
    constructor() {
        super();
        // singleton
        if (CinemaDatabase.instance) {
            return CinemaDatabase.instance;
        }
        
        // Criar as seções dos filmes
        const createSections = () => ({
            1: Array(30).fill(false),
            2: Array(30).fill(false),
            3: Array(30).fill(false),
            4: Array(30).fill(false)
        });

        // separar cadeiras por filme
        this.movies = {
            "Batman: O Cavaleiro das Trevas": createSections(),
            "Joker": createSections(),
            "Joker: Delírio a Dois": createSections(),
            "1917": createSections()
        };
        
        CinemaDatabase.instance = this;
    }

    isAvailable(movie, section, seatIndex) {
        return !this.movies[movie][section][seatIndex];
    }

    bookSeat(movie, section, seatIndex) {
        if (this.isAvailable(movie, section, seatIndex)) {
            this.movies[movie][section][seatIndex] = true;
            this.notify({ movie, section, seatIndex, status: 'booked' });
            return true;
        }
        return false;
    }

    getSectionData(movie, section) {
        return this.movies[movie][section];
    }
}

export const cinemaDB = new CinemaDatabase();