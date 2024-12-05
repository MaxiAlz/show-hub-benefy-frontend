export interface Event {
  id: number;
  name: string;
  description: string;
  photo: string;
  verticalPhoto: string;
  venue: string;
  subtitle: string;
  location: string;
  date: Date;
}

export type EventStatus = 'DRAFT' | 'PUBLISHED' | 'FINISHED';

export interface CreateEventData {
  name: string;
  subtitle: string;
  photo: string;
  verticalPhoto: string;
  venue: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

export interface EventLookLike {
  id?: number;
  name: string;
  subtitle: string;
  photo: string;
  verticalPhoto: string;
  venue: string;
  date: string;
  time: string;
  location: string;
  description: string;
  categoryId: number | null;
}

export interface TicketType {
  id?: number;
  name: string;
  description: string;
  price: number;
  endOfSale: string;
  startOfSale: string;
  totalAmount: number;
  maxAmountPerUser: number;
  eventId?: number;
}
export interface TicketLookLike {
  id?: number;
  name: string;
  description: string;
  price: number;
  endOfSale: string;
  startOfSale: string;
  totalAmount: number;
  maxAmountPerUser: number;
  eventId?: number;
}
export interface CategoriesTypes {
  items: CategoryItems[];
  pageIndex: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface CategoryItems {
  id: number;
  name: string;
}
export interface EvetsPaginated {
  items: ItemEvent[];
  pageIndex: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface ItemEvent {
  id: number;
  date: Date;
  name: string;
  description: string;
  state: EventStatus;
  photo: string;
  verticalPhoto: string;
}
