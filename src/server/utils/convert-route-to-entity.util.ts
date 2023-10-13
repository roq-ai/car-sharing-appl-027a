const mapping: Record<string, string> = {
  bookings: 'booking',
  cars: 'car',
  guests: 'guest',
  regulars: 'regular',
  reviews: 'review',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
