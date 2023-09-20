<template>
  <div id="app">
    <!-- 11. Router - Utilizing Vue Router to navigate between pages -->
    <nav>
      <!-- 1a. Text Interpolation - Displaying text in the template -->
      <router-link to="/">Home</router-link>
      <router-link to="/cart">Cart</router-link>
    </nav>

    <!-- 10b. Components Events [$emit] - Listening to events emitted from the router-view component and handling them using methods -->
    <!-- 11. Router - Utilizing router-view to display different components based on the current route -->
    <router-view :cart="cart" @remove-from-cart="removeFromCart" @add-to-cart="addToCart" />
  </div>
</template>

<script>
export default {
  name: 'App',
  
  // 3. Reactivity Fundamentals - Using data function to return a reactive data object
  data() {
    return {
      cart: [], // The cart array will reactively update the DOM whenever it's changed
    };
  },
  methods: {
    // 2. Methods - Defining methods to handle cart operations
    removeFromCart(index) {
      this.cart.splice(index, 1);
    },
    addToCart(item) {
      if (item && item.name && item.price !== undefined) {
      this.cart.push(item);
    } else {
      console.error('Invalid item data:', item);
    }
    },
  },
};
</script>

<style>
/* 5. Class and Style Bindings - Applying styles using class and id selectors */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* 5a. Binding HTML class - Applying styles using class selector */
nav {
  display: flex;
  justify-content: space-around;
  background-color: #42b983;
  padding: 14px;
}

/* 5a. Binding HTML class - Styling elements using class selector */
nav a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}
</style>
