<template>
    <!-- 10c. Slots - Demonstrating the use of slots in a component -->
    <div>
      <!-- Displaying the default slot content -->
      <slot name="default">Fallback content for default slot</slot>
      
      <!-- Displaying the content of a named slot -->
      <slot name="namedSlot">Fallback content for named slot</slot>
    </div>
  </template>
  
  <script setup>
    // No props or reactive variables are needed for this component
  </script>
  
  <style>
  /* You can add styles specific to this component here */
  </style>
  