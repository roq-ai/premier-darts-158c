const mapping: Record<string, string> = {
  businesses: 'business',
  products: 'product',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
