<script setup lang="ts">
import { ref } from "vue";
import type { Stats } from "@/model/stats";
import type { Restaurant } from "@/model/restaurants";
import { useSession } from "@/model/session";
import { useRouter } from "vue-router";

const stats = ref<Stats[]>([]);
const restaurants = ref<Restaurant[]>([]);

// Dummy data for stats
stats.value = [
  {
    type: "Daily",
    user: "john.doe",
    restaurant: "Restaurant A",
    calories: 500,
    totalDishes: 2,
    date: "2023-05-16",
    _id: "1",
    photo: "user1.jpg",
  },
  {
    type: "Daily",
    user: "jane.smith",
    restaurant: "Restaurant B",
    calories: 700,
    totalDishes: 1,
    date: "2023-05-15",
    _id: "2",
    photo: "user2.jpg",
  },
  {
    type: "Daily",
    user: "john.doe",
    restaurant: "Restaurant A",
    calories: 500,
    totalDishes: 2,
    date: "2023-05-16",
    _id: "1",
    photo: "user1.jpg",
  },
  {
    type: "Daily",
    user: "jane.smith",
    restaurant: "Restaurant B",
    calories: 700,
    totalDishes: 1,
    date: "2023-05-15",
    _id: "2",
    photo: "user2.jpg",
  },{
    type: "Daily",
    user: "john.doe",
    restaurant: "Restaurant A",
    calories: 500,
    totalDishes: 2,
    date: "2023-05-16",
    _id: "1",
    photo: "user1.jpg",
  },
  {
    type: "Daily",
    user: "jane.smith",
    restaurant: "Restaurant B",
    calories: 700,
    totalDishes: 1,
    date: "2023-05-15",
    _id: "2",
    photo: "user2.jpg",
  },
];

// Dummy data for restaurants
restaurants.value = [
  {
    name: "Restaurant A",
    // other properties
  },
  {
    name: "Restaurant B",
    // other properties
  },
];

const session = useSession();
const router = useRouter();

const isModalActive = ref(false);
const newStat: Stats = {} as any as Stats;
var date = new Date();

function toggleModal() {
  isModalActive.value = !isModalActive.value;
}

let restaurantsFolder =
  import.meta.env.VITE_SERVER_URL + "/static/restaurants/";
let usersFolder = import.meta.env.VITE_SERVER_URL + "/static/users/";
</script>

<template>
  <div class="columns">
    <div class="column"></div>
    <div class="column is-three-quarters">

      <div class="loading" v-if="!stats.length">
       
      <progress class="progress is-large is-dark" max="100">60%</progress>
      </div>

      <button
      style="background-color: #46aa5b; color: white; font-size: 15px; padding: 5px; width: 200px; height: 60px; border-radius: 5px; cursor: pointer"
        @click="toggleModal"
      >Post Something
      </button>
      <div class="modal" :class="{ 'is-active': isModalActive }">
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Pumped? Share with your friends!</p>
            <button
              class="delete"
              aria-label="close"
              @click="toggleModal"
            ></button>
          </header>
          <form
            @submit.prevent="
              addStat(
                newStat,
                date,
                session.user?.photo,
                session.user?.user
              ).then((result) => {
                getStats().then((result) => {
                  stats = result.data;
                });
              })
            "
          >
            <section class="modal-card-body">
              <div class="field">
                <label class="label">Date</label>
                <div class="control">
                  <input v-model="date" type="date" class="input" />
                </div>
              </div>
              
              <div class="field">
                <label class="label">Write a Caption</label>
                <div class="control">
                  <input
                    v-model="newStat.calories"
                    class="input"
                    type="text"
                    placeholder="Hustled a lot today. Phew!"
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Calories Burned (number only)</label>
                <div class="control">
                  <input
                    v-model="newStat.calories"
                    class="input"
                    type="number"
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Muscles Worked Out</label>
                <div class="control">
                  <input
                    v-model="newStat.calories"
                    class="input"
                    type="text"
                    placeholder="Biceps/ Chest/ Legs"
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Minutes Worked Out</label>
                <div class="control">
                    <input
                    v-model="newStat.calories"
                    class="input"
                    type="number"
                  />
                </div>
              </div>
            </section>
            <footer class="modal-card-foot">
              <button
                class="button is-success"
                type="submit"
                @click="toggleModal"
              >
                Submit
              </button>
            </footer>
          </form>
        </div>
      </div>

      <div v-for="stat in stats.slice().reverse()">
        <div
          class="card" style="background-color: white;"
          v-if="
            router.currentRoute.value.path == '/friends'
              ? stat.type == 'Daily'
              : stat.type == 'Daily' && stat.user == session.user?.user
          "
        >
        <div class="columns">
            <div class="card-image column">
            <figure class="image is-3by1">
              <img
                v-bind:src="restaurantsFolder + stat.restaurant + '.jpg'"
                alt="Placeholder image"
              />
            </figure>
          </div>
        
          <div class="card-content column">
            <div class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img
                    class="userImage"
                    :src="usersFolder + stat.photo"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="media-content">
                @<strong>{{ stat.user }}</strong>
                <br />
                <p>Caption Goes Here!</p>
                <div class="columns">
                  <div class="column">
                    <div class="title">{{ stat.calories }}</div>
                    Calories Burned
                  </div>

                  <div class="column">
                    <div class="title">{{ stat.totalDishes }}</div>
                    Minutes 
                  </div>
                </div>
                <a><i class="fa-solid fa-share"></i></a>
                <a><i class="fa-solid fa-heart"></i></a>
                <a><i class="fa-solid fa-retweet"></i></a>
              </div>
              <div class="media-right">
                <time>
                  <i class="fa-solid fa-calendar"></i>
                  {{ stat.date }}
                </time>
                &nbsp;
                <button
                  class="delete"
                  @click="
                    () => {
                      removeStat(stat._id).then((response) => {
                        stats = stats.filter((s) => s._id !== stat._id);
                      });
                    }
                  "
                ></button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    <div class="column"></div>
  </div>
</template>

<style scoped>
.columns {
  margin-top: 1rem;
}

.card {
  margin-bottom: 2rem;
}

.userImage {
  border-radius: 50%;
}

i {
  margin-right: 0.5rem;
}

.button {
  margin-bottom: 1rem;
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
