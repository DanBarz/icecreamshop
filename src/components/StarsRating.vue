<template>
  <!-- 5. Class and Style Bindings a. Binding HTML class [v-bind:class] -->
  <div>
    <!-- The 'v-for' directive iterates over each element in the 'stars' array, displaying it as a star icon -->
    The ':class' directive dynamically assigns the 'filled-star' class based on the current 'rating' value
    <!-- The '@click' directive calls the 'setRating' method, passing in the current 'star' value -->
    <span
      v-for="star in stars"
      :key="star"
      
      :class="{ 'filled-star': star <= rating }"
      
      @click="setRating(star)"
      class="star"
    >
      <!-- Displaying a star character for each element in the 'stars' array -->
      ★
    </span>
  </div>
</template>

<script>
export default {
  name: "StarsRating",
  // Declaring the 'props' option to receive 'initialRating' prop from the parent component
  props: {
    // 3. Reactivity Fundamentals: defining a prop to hold the initial rating value passed down from the parent
    initialRating: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      // Reactively defining 'rating' data property to hold the current rating value
      rating: this.initialRating,
      // Defining a static array 'stars' to hold the possible star ratings
      stars: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    // 2. Methods: defining a method to handle setting of rating and emitting the new rating value
    setRating(star) {
      this.rating = star;
      // 10. Components b. Events: using '$emit' to emit a custom event notifying the parent component about the change in rating value
      this.$emit('rating-changed', star);
    },
  },
};
</script>

<style>
/* Defining a CSS class to style the star icons */
.star {
  font-size: 2em;
  cursor: pointer;
}

/* 5. Class and Style Bindings: Defining a CSS class to be dynamically applied to filled stars based on the rating value */
.filled-star {
  color: gold;
}
</style>
