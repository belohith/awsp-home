<script setup lang="ts">
let staticFolder = import.meta.env.VITE_SERVER_URL + "/static/";
</script>

<template>
  <div class="columns" >
    
    <div class="column">
      <img class="burger" src="@/assets/gymman.jpg" alt="gymman" width="500" height="1500">
      <img class="burger" src="@/assets/gymwoman.jpg" alt="gymwoman" width="500" height="1500">
    </div>

    <div class="column">
      <div class="wrapper">
        
        <img class="burger" src="@/assets/logo.png" alt="logo" width="300" height="300">
        <div class="title">Ready to workout?</div>
        <div class="text">
          Track your calories and workouts on the road to a healthy lifestyle!
        </div>
        <br /><br />
        <p class="explanation">
          Let's get you started.
          Login to the app using your email address.
        </p>
        <br /><br />

        <div style="margin: 1rem; color: white">
          <div style=" background-color: #040404; padding: 10px;border-radius: 10px;">
            <h1>FOR DEMO PURPOSES, USE THE FOLLOWING CREDENTIALS</h1><br/>
            <p>Username: bollinel1@newpaltz.edu</p>
            <p>Password: 123456</p><br/>
            <p>Username: plotkinm@newpaltz.edu</p>
            <p>Password: abcdef</p><br/>
            <p>Username: bheem@newpaltz.edu</p>
            <p>Password: qwerty</p><br/>
            <p>Username: nayak@newpaltz.edu</p>
            <p>Password: random</p>

          </div>
        </div>
      </div>
    </div>
  </div>
  <br/><br/>
</template>

<style scoped>
.burger {
  margin: 2rem;
  padding: 2.5rem;
}

.title {
  color: white;
  font-size: 4rem;
  font-weight: bold;
  display: inline-block;
  margin: 1rem;
}

.text {
  color: #444444;
  font-size: x-large;
  font-weight: bold;
  display: inline-block;
  margin-left: 1rem;
}

.explanation {
  color: #46aa5b;
  display: inline-block;
  margin-left: 1rem;
}

.calories {
  color: #3f8c4c;
  font-style: italic;
  font-weight: bold;
}

.eating {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

</style>
