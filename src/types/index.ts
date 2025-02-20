export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: EventCategory;
  price: number;
  availableSeats: number;
  image: string;
  featured?: boolean;
}

export type EventCategory = 'concert' | 'conference' | 'workshop' | 'sports' | 'theater';

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  tickets: Ticket[];
}

export interface Ticket {
  id: string;
  eventId: string;
  purchaseDate: string;
  qrCode: string;
  status: 'valid' | 'used' | 'cancelled';
}

export interface BookingDetails {
  eventId: string;
  userId: string;
  quantity: number;
  totalPrice: number;
  status: BookingStatus;
  ticketIds: string[];
  paymentIntent?: string;
  createdAt: string;
  specialRequirements?: string;
}

export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';

export interface TicketDetails {
  id: string;
  bookingId: string;
  eventId: string;
  userId: string;
  qrCode: string;
  status: 'valid' | 'used' | 'cancelled';
  seatNumber?: string;
  createdAt: string;
}