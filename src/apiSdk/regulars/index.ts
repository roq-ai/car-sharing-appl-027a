import queryString from 'query-string';
import { RegularInterface, RegularGetQueryInterface } from 'interfaces/regular';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getRegulars = async (query?: RegularGetQueryInterface): Promise<PaginatedInterface<RegularInterface>> => {
  return fetcher('/api/regulars', {}, query);
};

export const createRegular = async (regular: RegularInterface) => {
  return fetcher('/api/regulars', { method: 'POST', body: JSON.stringify(regular) });
};

export const updateRegularById = async (id: string, regular: RegularInterface) => {
  return fetcher(`/api/regulars/${id}`, { method: 'PUT', body: JSON.stringify(regular) });
};

export const getRegularById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/regulars/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteRegularById = async (id: string) => {
  return fetcher(`/api/regulars/${id}`, { method: 'DELETE' });
};
