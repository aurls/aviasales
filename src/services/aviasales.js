import crc32 from 'crc-32';

export default class Aviasales {
  constructor () {
    this._apiBase = 'https://front-test.beta.aviasales.ru/';
    this._searchUri = 'search';
    this._ticketsUri = 'tickets?searchId=';
  }

  async getResource (uri) {
    const response = await fetch(`${this._apiBase}${uri}`);
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  }

  async getSearchId () {
    const response = await this.getResource(this._searchUri);
    return this._exctractSearchId(response);
  }

  async getTickets (searchId) {
    const response = await this.getResource(`${this._ticketsUri}${searchId}`);
    return this._transformTickets(response);
  }

  _exctractSearchId (response) {
    return response.searchId;
  }

  _transformTickets (response) {
    const tickets = response.tickets;
    tickets.map((ticket) => {
      const dataForHash = `${ticket.price}${ticket.origin}${ticket.carrier}${ticket.segments[0].date}`;
      ticket.id = Math.abs(crc32.str(dataForHash));
    });
    return {
      tickets,
      stop: response.stop
    };
  }
}
