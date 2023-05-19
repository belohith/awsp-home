<script setup lang="ts">
import { calcTotal, resetCalc } from '@/model/stats';

</script>

<template>
    <div class="card">
        <div class="card-content">
            <div class="content">
                Calories Burned Totally
                <div class="title">
                    {{ calcTotal }}
                </div>
                <button style="background-color: #46aa5b; color: white; padding: 5px; width: 100px; border-radius: 5px; cursor: pointer" @click="resetCalc"> Reset Values </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;

}

.title {
    font-size: 4rem;
    color: darkslategray;
}
</style>