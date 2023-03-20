<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import NavBar from "./components/NavBar.vue";
import { ref } from 'vue'

// Create a ref to track the logged in status
const isLoggedIn = ref(false)

// Get the router instance
const router = useRouter()



const logout = () => {
  // do any necessary cleanup, such as clearing session data
  // then redirect to the welcome page
  router.push('/welcome')
  // set loggedIn to false
  loggedIn.value = false
}

const login = (user) => {
  // do any necessary setup, such as setting session data
  // then set loggedIn to true
  sessionStorage.setItem('selectedUser', user)
  loggedIn.value = true
}

const loggedIn = ref(false)
</script>

<template>
  <div>
    <NavBar />
  <div class="row">

    
    <RouterView />
    <div>
      <nav class="navbar">
        <RouterLink v-if="loggedIn" to="/">Home</RouterLink>
        <RouterLink v-if="loggedIn" to="/friends">Friends</RouterLink>
        <RouterLink v-if="loggedIn" to="/stats">Stats</RouterLink>
        <RouterLink v-if="loggedIn" to="/profile" class="m-10">Profile</RouterLink>
        <RouterLink v-if="loggedIn" to="/addpost">Add Post</RouterLink> 
        <RouterLink v-if="loggedIn" to="/welcome" @click="logout" class="red">Logout</RouterLink>
        <RouterLink v-if="!loggedIn" to="/" class="green" @click="login('Lohith Bollineni')">Lohith Bollineni</RouterLink>
        <RouterLink v-if="!loggedIn" to="/" class="green" @click="login('Bradley C')">Bradley C</RouterLink>
        <RouterLink v-if="!loggedIn" to="/" class="green" @click="login('Britney S')">Britney S</RouterLink>
        
      </nav>
    </div>
    
  </div>
  </div>
  
</template>

<style scoped>
</style>
