import { ref, computed } from 'vue';

export interface CalculatorEntry {
  id: number;
  calories: number;
}

const calculatorData = ref([] as CalculatorEntry[]);

export function addToCalculator(calories: number) {
  calculatorData.value.push({
    id: calculatorData.value.length + 1,
    calories: calories
  });
}

export function resetCalculator() {
  calculatorData.value = [];
}

export const calculateTotalCalories = computed(() =>
  calculatorData.value.reduce((total, entry) => total + entry.calories, 0)
);
