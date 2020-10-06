namespace Types {
  type Segment = {
    origin: string
    destination: string
    date: string
    stops: string[]
    duration: number
  }

  type Ticket = {
    id: string
    price: number
    carrier: string
    segments: {
      [index: string]: Segment
    }
  }

  export type Tickets = {
    [index: string]: Ticket
  }

  export type TicketsFromServer = Omit<Ticket, 'id'>[]

  export type Filter = {
    type: string
    title: string
    fn: (numberOfTransfers: number) => boolean
  }
}

export default Types;
