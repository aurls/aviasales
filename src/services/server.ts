import { nanoid } from 'nanoid/non-secure';
import Types from '../types';

class Server {
  private apiBase: string
  private searchUri: string
  private ticketsUri: string

  constructor () {
    this.apiBase = 'https://front-test.beta.aviasales.ru/';
    this.searchUri = 'search';
    this.ticketsUri = 'tickets?searchId=';
  }

  private async getResource (uri: string) {
    const response = await fetch(`${this.apiBase}${uri}`);
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  }

  public async getSearchId () {
    const response = await this.getResource(this.searchUri);
    return response.searchId;
  }

  public async getTickets (searchId: string) {
    const response = await this.getResource(`${this.ticketsUri}${searchId}`);
    return {
      tickets: this.normalizeTickets(response.tickets),
      isStop: response.stop
    };
  }

  private normalizeTickets (tickets: Types.TicketsFromServer): Types.Tickets {
    const normalizedTickets: Types.Tickets = {};

    tickets.forEach((ticket) => {
      const id = nanoid(10);
      normalizedTickets[id] = {
        ...ticket,
        id
      };
    });

    return normalizedTickets;
  }
}

export default Server;
