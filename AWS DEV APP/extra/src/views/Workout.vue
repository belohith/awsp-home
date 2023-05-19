<template>
  <div>
    <div class="loading" v-if="!foodItems.length">
      <progress class="progress is-large is-dark" max="100">60%</progress>
    </div>

    <Card />
  
    <div class="food-list columns is-multiline">
      <div class="food-item column is-one-third" v-for="foodItem in foodItems" :key="foodItem.id">
        <br />
        <article class="message is-warning">
          <div style="padding: 20px">
            <div class="media">
              
              <div class="media-content">
                <strong class="dish" style="color: #46aa5b; font-size: 30px;">{{ foodItem.dish }}</strong>
                <br />
                <span class="muscle" style="color: #555555" >{{ foodItem.muscle }}</span>
                <br />
                <span class="sets">{{ foodItem.set }}</span>
                <br />
                <span class="time">Average Time: {{ foodItem.time }}</span>
                <br />
                <label for="weight" style="color: white">Weight in 'kgs': </label>
                <input type="number" v-model="selectedWeight" id="weight" />
                <br />
                <span class="calories" style="color: #3f8c4c">{{ Math.round(foodItem.calories * selectedWeight) }} Cal</span>
              </div>
              <div class="media-left">
                <!-- <figure class="image is-96x96">
                  <img :src="foodItem.thumbnail" alt="foodImage">
                </figure> -->
                <button style="background-color: #46aa5b; color: white; padding: 5px; width: 100px; border-radius: 5px; cursor: pointer" @click="addToCalCalc(foodItem.calories * selectedWeight)" @mouseenter="toggleCalCard" @mouseleave="toggleCalCard">
                  Add
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { addToCalCalc } from '@/model/stats';
  
  import Card from '@/components/Card.vue';
  
  const foodItems = ref<FoodItem[]>([]);
  
  foodItems.value = [
    {
      id: '1',
      dish: 'Bicep Curl',
      calories: 0.72,
      thumbnail: 'wo1.jpg',
      muscle: 'Biceps',
      time: '10 min',
      set: '3 sets/ 15 each'
    },
    {
      id: '2',
      dish: 'Hammer Curl',
      calories: 0.72,
      thumbnail: 'wo2.jpg',
      muscle: 'Biceps',
      time: '10 min',
      set: '3 sets/ 15 each'
    },
    {
    id: '3',
    dish: 'Tricep Dip',
    calories: 0.55,
    thumbnail: 'wo3.jpg',
    muscle: 'Triceps',
    time: '8 min',
    set: '3 sets/ 12 each'
  },
  {
    id: '4',
    dish: 'Push-up',
    calories: 0.46,
    thumbnail: 'wo4.jpg',
    muscle: 'Chest, Triceps',
    time: '5 min',
    set: '3 sets/ 10 each'
  },
  {
    id: '5',
    dish: 'Squat',
    calories: 0.62,
    thumbnail: 'wo5.jpg',
    muscle: 'Quadriceps, Glutes',
    time: '12 min',
    set: '3 sets/ 15 each'
  },
  {
    id: '6',
    dish: 'Deadlift',
    calories: 0.78,
    thumbnail: 'wo6.jpg',
    muscle: 'Hamstrings, Glutes',
    time: '10 min',
    set: '3 sets/ 8 each'
  },
  {
    id: '7',
    dish: 'Lunges',
    calories: 0.53,
    thumbnail: 'wo7.jpg',
    muscle: 'Quadriceps, Glutes',
    time: '10 min',
    set: '3 sets/ 12 each'
  },
  {
    id: '8',
    dish: 'Plank',
    calories: 0.41,
    thumbnail: 'wo8.jpg',
    muscle: 'Core',
    time: '5 min',
    set: '3 sets/ 1 min each'
  },{
    id: '9',
    dish: 'Russian Twist',
    calories: 0.38,
    thumbnail: 'wo9.jpg',
    muscle: 'Core, Obliques',
    time: '5 min',
    set: '3 sets/ 15 each'
  },
  {
    id: '10',
    dish: 'Calf Raise',
    calories: 0.35,
    thumbnail: 'wo10.jpg',
    muscle: 'Calves',
    time: '5 min',
    set: '3 sets/ 15 each'
  },{
    id: '11',
    dish: 'Pull-up',
    calories: 0.76,
    thumbnail: 'wo10.jpg',
    muscle: 'Back, Biceps',
    time: '8 min',
    set: '3 sets/ 8 each'
  },
  {
    id: '12',
    dish: 'Chin-up',
    calories: 0.72,
    thumbnail: 'wo10.jpg',
    muscle: 'Back, Biceps',
    time: '8 min',
    set: '3 sets/ 8 each'
  },
    // add more workout items
  ];
  
  const isCalCardActive = ref(false);
  const selectedWeight = ref(0);
  let staticFolder = import.meta.env.VITE_SERVER_URL + "/static/";
  
  function toggleCalCard() {
    isCalCardActive.value = !isCalCardActive.value;
  }
  
  </script>
  
  <style scoped>
  .calories {
    color: #9f8c4c;
    font-size: xx-large;
    font-weight: bold;
  }
  
  .sets {
    color: white;
  }
  
  .muscle {
    color: #9f8c4c;
  }
  
  .time {
    color: white;
  }
  
  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height:   100vh;
}

.food-item {
  margin-bottom: 1.5rem;
  color: #46aa5b;
}

.food-item:nth-child(3n + 1) {
  margin-left: 0;
}

.food-item:nth-child(3n) {
  margin-right: 0;
}

.food-item .message {
  background-color: #030303;
  color: white;
}

input[type='number'] {
  width: 80px;
}
</style>

  