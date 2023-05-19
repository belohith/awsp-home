import { api } from './session';
import type { DataEnvelope, DataEnvelopeList } from './myFetch';
import { computed, ref, reactive } from 'vue';
import { useSession } from './session';

// Feedback may be related to oassing user as parameter here 
const session = useSession();
// const stats = ref<Stats[]>([]);

// getStats().then((result) => {
//     stats.value = result.data;
// });
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

export interface CalCalc {
    id: number;
    calories: number;
}

export function getStats(): Promise<DataEnvelopeList<Stats>> {
    return api('/stats', null, 'GET', { 'Authorization': 'Bearer ' + session.user?.token});
}

export function addStat(stat: Stats, date: Date, photo: string | undefined, user: string | undefined): Promise<DataEnvelope<Stats>> {

    let userDate = new Date(date).getDate();
    let current = new Date().getDate();
    let daysAgo = (current - userDate) - 1;

    stat.date = JSON.stringify(date) + ' | ' + daysAgo + ' days ago';
    stat.user = user as string;
    stat.photo = photo as string;
    stat.type = 'Daily';

    return api('/stats', stat, 'POST', { 'Authorization': 'Bearer ' + session.user?.token});
}

export function removeStat(id?: string): Promise<DataEnvelope<Stats>> {
    return api(`/stats/${id}`, null, 'DELETE', { 'Authorization': 'Bearer ' + session.user?.token});
}


// ---------- Calculator -----------
export interface CalCalc {
    id: number;
    calories: number;
}

const calculatorData = ref([] as CalCalc[]); 

export function addToCalCalc(calories: number) {
        calculatorData.value.push({
            id: calculatorData.value.length + 1,
            calories: calories
            //And here not?  
        });
}

export function resetCalc(){
    calculatorData.value = [];
}

// ---------- Computing -----------


export const calcTotal = computed(() => calculatorData.value.reduce((total, calorieData) => total + calorieData.calories, 0));



// export function getStats(): Stats[] {
//     return data.stats;
// }

// export function useStats() {
//     return stats;
// }

// export function addToStats(testStat: Stats, date: Date, photo: string | undefined, user: string | undefined) {

//     var userDate = new Date(date).getDate();
//     var current = new Date().getDate();

//     var daysAgo = (current - userDate) - 1;

//     stats.value.push({
//         id: stats.value.length + 1,
//         user: user,
//         photo: photo,
//         type: 'Daily',
//         calories: Number(testStat.calories),
//         totalDishes: testStat.totalDishes,
//         date: JSON.stringify(date) + ' | ' + daysAgo + ' days ago',
//         restaurant: testStat.restaurant
//     });
// }