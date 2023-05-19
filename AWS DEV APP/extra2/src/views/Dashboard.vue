<script setup lang="ts">
import { useSession } from '@/model/session';
import { getStats, type Stats } from '@/model/stats';
import { ref } from 'vue';
import { computed } from 'vue';

const session = useSession();

const stats = ref<Stats[]>([]);

getStats().then((result) => {
    stats.value = result.data;
});

const filteredStats = computed(() => stats.value.filter((stat) => stat.type == 'Daily' && stat.user == session.user?.user));
const myRecentCalories = computed(() => filteredStats.value.reduce((total, calorieData) => total + (+calorieData.calories), 0));

</script>

<template>
    <div class="container">
        <div class="columns">
            
            <div class="column is-half">

                <div class="box" style="background-color: #030303">
                    <div class="wrapper">
                        <strong style="color: white">Calories (in Cal)</strong>
                        <div class="title">{{ myRecentCalories }}</div>Calories burnt so far (the ones you have posted)
                    </div>
                </div>

                <div class="box" style="background-color: #030303">
                    <div class="wrapper">
                        <p style="color: white">This App is created by Lohith Bollineni for a Full Stack MEVN Web Development Course at SUNY New Paltz under Prof. Moshe Plotkin. Any images or content used here is for learning purpose only and I don't have the rights. And some of the information (like calories burned for each workout is only an estimate) may be incorrect. It is an app still in beta.</p>
                        <br/><br/>
                        <p>GitHub Link for the Repo: <a href="" style="text-decoration: none; color: cyan">Here</a> </p> <br/>
                        <p>My LinkedIn if you want to reach out: <a href="" style="text-decoration: none; color: cyan">Here</a> </p> <br/>
                        <p>My Website if you want to reach out: <a href="" style="text-decoration: none; color: cyan">Here</a> </p> <br/>
                        

                    </div>
                </div>

            </div>
            <article class="column message is-warning" style="background-color: #0b0a0a;">
                <div class="message-header" style="background-color: #46aa5b;">
                    <p style="color: #191919;">How to use this app?</p>
                </div>
                <div class="message-body" style="color: white;">
                    This is a fitness tracker app that allows you to keep a track of your calories burned after each workout. <br/><br/>
                    In order to use this app, follow the following steps: <br/><br/>
                    > Login into your account (if you are seeing this page, it probably means you already are.) <br/><br/>
                    > Go to workouts page at the top, and see the list of workouts.<br/> <br/>
                    > Select the weight that you used to do the workout (for ex. if you did a Bicep Curl with a 20kg, select 20 in the Weight section) <br/><br/>
                    > You will see the Calories accordingly for each workout.<br/> <br/>
                    > Add all the workouts, that you did for the day. Your overall Calories burned for the day (for the workouts you have added), will be shown on top. <br/><br/>
                    > (The Calories are round round off to the nearest interger in each workout whereas it is not on the top. Hence you will see a minor difference in values, don't worry) <br/><br/>
                    > You can also reset, to add the values fresh from start. <br/><br/>
                    > Once you get your overall calories for the day, you can go to 'My Profile' or 'Friends', to share this news with your friends. <br/><br/>
                    > In order to do that, you can click the 'Post Something'. Fill in the required details and click 'Submit'. <br/><br/>
                    > That's it! Your post will be shared with your friends. <br/><br/>
                    > You can also see the Total Calories burned throughout (the ones that you have posted) on this page. The value on the left side of this page indicates the same. <br/><br/>
                    > If you enjoyed, using the app leave a review on bollinel1@newpaltz.edu !
                </div>
            </article>
        </div>
    </div>
</template>

<style scoped>
.column {
    margin: 1rem;
}

.container {
    margin-top: 1rem;
}

.box {
    margin-bottom: 1rem;
    background-color: #191919;
}

.title {
    color: #46aa5b;
    font-size: 5rem;
}

.title.non-dynamic {
    color: lightgray;
    font-size: 5rem;
}

.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: white
}
</style>