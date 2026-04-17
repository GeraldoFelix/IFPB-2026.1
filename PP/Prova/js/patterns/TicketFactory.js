import { Ticket } from './Ticket.js';

export class TicketFactory {
    static createTicket(cliente, cpf, filme, seccao, assento, tipo) {
        return new Ticket(cliente, cpf, filme, seccao, assento, tipo);
    }
}