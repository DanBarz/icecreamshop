import { createRouter, createWebHashHistory } from 'vue-router';
import Shop from '../views/Shop.vue';
import Cart from '../components/ShoppingCart.vue';
import { store } from './store'; 

// 11. Router - Setting up routing with Vue Router, defining routes for your application
const routes = [
  // 11. Router - Defining a route path and associating it with a component
  { path: '/', component: Shop },
  
  // 11. Router - Defining a route path with dynamic props passed to the component, using a function to return the props object
  // 10a. Components Props - Using props to pass the cart data from the store to the Cart component
  { path: '/cart', component: Cart, props: () => ({ cart: store.cart }) },
 
];

// 11. Router - Creating a router instance, specifying the history mode and defining the routes
const router = createRouter({
  // 11. Router - Specifying the history mode to be used by Vue Router
  history: createWebHashHistory(),
  // 11. Router - Associating the defined routes with the router
  routes,
});

// Exporting the router instance to be used in your main.js or main.ts file
export default router;
