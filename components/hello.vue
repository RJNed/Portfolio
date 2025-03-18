<template>
    <div>
        <h2> {{ title }} </h2>
        <p> {{ message }}</p>
    </div>
  </template>

  <script setup>
defineProps({
    title: {
        type: String,
        default: 'Hello from component'
    },
    message:{
        type: String,
        default: 'Welcome to the component'
    }
});
</script>

<style scoped>
h2 {
    text-align: center;
    color:blue; 
}
p {
    text-align: center;
    font-size: 1rem;
    color:#333;
}
</style>