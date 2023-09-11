<template>
  <!-- 6. List Rendering e. v-for with a Component -->
  <div>
    <h2>Shopping Cart</h2>
    <ul>
      <li v-for="(item, index) in cart" :key="index">
        {{ item.name }} - ${{ item.price }}
        <!-- 7. Event Handling b. Method Handlers -->
        <button @click="removeFromCart(index)">Remove</button>
      </li>
    </ul>
    <!-- 1. Template Syntax d. JavaScript expressions inside syntax i.e.{{ }} -->
    <p>Total: ${{ total }}</p>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart',
  // 10. Components a. Props
  props: {
    cart: {
      type: Array,
      required: true,
    },
  },
  // 4. Computed Properties
  computed: {
    total() {
      return this.cart.reduce((acc, item) => acc + item.price, 0);
    },
  },
  methods: {
    // 2. Methods
    removeFromCart(index) {
      this.$emit('remove-from-cart', index);
    },
  },
};
</script>
