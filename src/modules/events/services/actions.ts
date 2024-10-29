import { apiService } from '../../../api/apiService';
import { EventLookLike, type Event } from '../interfaces/event';

export const getEvents = async () => {
  try {
    const { data } = await apiService.get<Event[]>('/Events');
    return data;
  } catch (error) {
    return `Error al obtener eventos: ${error}`;
  }
};

export const createEvent = async (formData: EventLookLike) => {
  const { data } = await apiService.post<Event>('/Events', formData);
  return data;
};
