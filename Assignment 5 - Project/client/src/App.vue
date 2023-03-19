<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Home from "./views/HomeView.vue";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div>
    <NavBar />
  <div class="row">

    
    <RouterView />
    <div>
      <nav class="navbar">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/friends">Friends</RouterLink>
        <RouterLink to="/stats">Stats</RouterLink>
        <RouterLink to="/profile" class="m-10">Profile</RouterLink>
        <RouterLink to="/addpost">Add Post</RouterLink>
        <RouterLink to="/welcome" class="red">Logout</RouterLink>
      </nav>
    </div>
    
  </div>
  </div>
  
</template>

<style scoped>
</style>
