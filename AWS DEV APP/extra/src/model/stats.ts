import { api } from './session';
import type { DataEnvelope, DataEnvelopeList } from './myFetch';
import { useSession } from './session';

const session = useSession();

export interface Stats {
  _id: string;
  user?: string;
  photo?: string;
  type: string;
  calories: number;
  totalDishes: number;
  date: string;
  restaurant: string;
}

export function getStats(): Promise<DataEnvelopeList<Stats>> {
  return api('/stats', null, 'GET', { 'Authorization': 'Bearer ' + session.user?.token });
}

export function addStat(
  stat: Stats,
  date: Date,
  photo: string | undefined,
  user: string | undefined
): Promise<DataEnvelope<Stats>> {
  let userDate = new Date(date).getDate();
  let current = new Date().getDate();
  let daysAgo = (current - userDate) - 1;

  stat.date = JSON.stringify(date) + ' | ' + daysAgo + ' days ago';
  stat.user = user as string;
  stat.photo = photo as string;
  stat.type = 'Daily';

  return api('/stats', stat, 'POST', { 'Authorization': 'Bearer ' + session.user?.token });
}

export function removeStat(id?: string): Promise<DataEnvelope<Stats>> {
  return api(`/stats/${id}`, null, 'DELETE', { 'Authorization': 'Bearer ' + session.user?.token });
}
