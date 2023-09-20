<template>
    <!-- 6e. v-for with a Component - Displaying the prop inside the template -->
    <div>
      This is item number {{ number }} in the v-for loop.
    </div>
  </template>
  
  <script setup>
    // 10a. Components Props - Importing defineProps to define the props that the component accepts
    import { defineProps } from 'vue';
  
    // Defining a prop to accept the number from the parent component
    const { number } = defineProps(['number']);
  </script>
  
  <style>
  /* You can add styles specific to this component here */
  </style>
  