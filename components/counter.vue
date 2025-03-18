<template>
    <div class = "counter">
    <button @click="counter.decrement">-</button>
    <button>{{ counter.count }}</button>
    <button @click="counter.increment">+</button>
    </div>

    <br> <!--break-->

    <div class = "info">    
    <button @click="counter.reset">Reset</button>
    <h2>Double Count: {{ counter.doubleCount }}</h2>
    </div>
</template>

<script setup lang="ts">
    import { useCounterStore } from '~/stores/counter'
    // Access the store
    const counter = useCounterStore()
</script>

<style scoped>
    .counter{
        text-align: center;
    }
    .info{
        text-align: center;
    }
</style>