<script setup lang="ts">
import profile from '../assets/profilephoto.png';
import post from '../assets/postimage.png';
</script>

<template>
    <div class="post-view">
        <div class="row">
        <div><img :src="profile" alt="Profile" class="profile-photo"  /></div>
        <div class="text-1 mr-10">asha</div>
        <div class="text-2">@asha</div>
        </div>
        <div class="text-3">Ran 25 miles for the first time non-stop!</div>
        <div><img :src="post" alt="Post" class="post-photo"  /></div>
        <div class="text-3">Run / 25 miles / 2 hours</div>
        <div class="text-3 ta-r">New York City, NY</div>
    </div>
</template>

<style scoped>
</style>
