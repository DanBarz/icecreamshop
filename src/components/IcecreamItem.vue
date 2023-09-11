<template>
  <div>
    <!-- 1. Template Syntax -->
    <!-- 1a. Text Interpolation - Displaying icecream name and price dynamically -->
    <p>{{ icecream.name }} - ${{ icecream.price }}</p>
    
    <!-- 5. Class and Style Bindings -->
    <!-- 5a. Binding HTML class - Dynamically binding a class to a button based on a computed property -->
    <button v-bind:class="buttonClass" @click="addToCart">Add to Cart</button>
    
    <!-- 10. Components -->
    <!-- 10b. Events - Using $emit to emit a custom event, notifying parent component of an add to cart action -->
    <!-- 7. Event Handling -->
    <!-- 7b. Method Handlers - Handling click event to execute a method -->
  </div>
</template>

<script>
export default {
  name: 'IcecreamItem',
  // 10a. Components Props - Receiving a prop from a parent component to get icecream data -->
  props: {
    icecream: {
      type: Object,
      required: true,
    },
  },

  computed: {
    // 4. Computed Properties - Defining a computed property to dynamically calculate class names based on icecream price -->
    buttonClass() {
      return {
        'is-expensive': this.icecream.price > 3,
      };
    },
  },

  methods: {
    // 2. Methods - Defining a method to handle add to cart action and emit event to parent component -->
    addToCart() {
      this.$emit('add-to-cart', this.icecream);
    },
  },
};

</script>

<style>
/* 5b. Binding Inline Styles - Defining styles for the dynamically bound class */
.is-expensive {
  background-color: red;
}
</style>
