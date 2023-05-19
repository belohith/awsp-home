import { api } from './session';
import type { DataEnvelope, DataEnvelopeList } from './myFetch';
import { useSession } from './session';

const session = useSession();

export interface WorkoutName {
    id: number;
    name: string;
    duration: number;
    intensity: string;
}

export function getWorkouts(): Promise<DataEnvelopeList<WorkoutName>> {
    return api('/workouts', null, 'GET', { 'Authorization': 'Bearer ' + session.user?.token });
}

export function getWorkoutById(id: number): Promise<DataEnvelope<WorkoutName>> {
    return api(`/workouts/${id}`, null, 'GET', { 'Authorization': 'Bearer ' + session.user?.token });
}

export function searchWorkouts(query: string): Promise<DataEnvelopeList<WorkoutName>> {
    return api(`/workouts/search/${query}`, null, 'GET', { 'Authorization': 'Bearer ' + session.user?.token });
}

export function addWorkout(workout: WorkoutName): Promise<DataEnvelope<WorkoutName>> {
    return api('/workouts', workout, 'POST', { 'Authorization': 'Bearer ' + session.user?.token });
}

export function updateWorkout(workout: WorkoutName): Promise<DataEnvelope<WorkoutName>> {
    return api(`/workouts/`, workout, 'PATCH', { 'Authorization': 'Bearer ' + session.user?.token });
}

export function deleteWorkout(id: number): Promise<DataEnvelope<WorkoutName>> {
    return api(`/workouts/${id}`, null, 'DELETE', { 'Authorization': 'Bearer ' + session.user?.token });
}
