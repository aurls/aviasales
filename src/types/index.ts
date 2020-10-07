namespace Types {
  export type Segment = {
    origin: string
    destination: string
    date: string
    stops: string[]
    duration: number
  }

  export type Ticket = {
    id: string
    price: number
    carrier: string
    segments: Segment[]
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

  export type Sorting = {
    type: string
    title: string
    fn: (valueA: number, valueB: number) => number
  }
}

export default Types;
