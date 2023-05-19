<script setup lang="ts">
import { ref } from 'vue';
import type { User } from '@/model/users';

const users = ref<User[]>([
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    user: 'johndoe',
    photo: 'placeholder.jpg',
  },
  {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    user: 'janesmith',
    photo: 'placeholder.jpg',
  },
]);

let usersFolder = import.meta.env.VITE_SERVER_URL + "/static/users/";

</script>

<template>
  <div class="wrapper">
    <h1 style="color: white; padding: 10px">Admin View: All users</h1>

    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th><abbr title="Photo">Photo</abbr></th>
          <th><abbr title="Name">Name</abbr></th>
          <th><abbr title="Email">Email</abbr></th>
          <th><abbr title="Handle">Handle</abbr></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.user">
          <td>
            <img class="userImage" :src="usersFolder + user.photo" alt="userImage" width="124" height="124">
          </td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.user }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <br /><br /><br />
</template>

<style scoped>
.userImage {
  border-radius: 0.5rem;
}

.breadcrumb {
  margin: 1rem;
}

.button {
  margin-bottom: 1rem;
}

.eating {
  margin: 1rem;
}
</style>
