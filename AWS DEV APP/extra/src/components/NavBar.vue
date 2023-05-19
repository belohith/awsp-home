<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import LoginBadge from '@/components/LoginBadge.vue';

const isMenuActive = ref(false);

function toggleMenu() {
    isMenuActive.value = !isMenuActive.value;
}

</script>

<template>
    <nav class="navbar is-warning" style="backgroundColor: #191919">
        <div class="container">
            <div class="navbar-brand">

                <RouterLink to="/" class="nav-item">
                    <div >
                        <img src="@/assets/logo.png" alt="logo" width="50" height="50"/>
                    </div>
                    
                </RouterLink>

                <div class="navbar-burger" :class="{'is-active': isMenuActive}" @click="toggleMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div class="navbar-menu" :class="{'is-active': isMenuActive}">
                <div class="navbar-start">
                    
                    <RouterLink to="/about" class="nav-item"  style="color: white" @click="">
                        
                        About
                    </RouterLink>

                    <RouterLink to="/feed" class="nav-item"  style="color: white">
                        My Profile
                    </RouterLink>
                    

                    <RouterLink to="/workout" class="nav-item"  style="color: white">
                        Workouts
                    </RouterLink>

                    <RouterLink to="/friends" class="nav-item"  style="color: white">
                        Friends
                    </RouterLink>

                </div>

                <div class="navbar-end" >

                    <LoginBadge />

                    <RouterLink to="/admin" class="nav-item"  style="color: white">
                        Admin
                    </RouterLink>
                    
                    

                    
                    
                </div>

            </div>
        </div>
        
    </nav>
</template>

<style scoped>
.nav-item {
  background-color: transparent;
  padding: 10px;
}

.nav-item:hover {
  background-color: #46aa5b;
}

.nav-item:focus {
  outline: none; /* Removes the default focus outline */
  background-color: transparent;
}


</style>