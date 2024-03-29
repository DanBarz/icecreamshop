<template>
  <div>
    <!-- 1a. Text Interpolation - Displaying the heading as static text -->
    <h1>Ice Cream Shop</h1>

    <!-- 6. List Rendering - Using v-for to iterate over the icecreams array and display each one using the IcecreamItem component -->
    <div v-for="(icecream, index) in icecreams" :key="index">
      <!-- 10a. Components Props - Passing the icecream object as a prop to the IcecreamItem component -->
      <!-- 10b. Components Events [$emit] - Emitting the add-to-cart event and passing the icecream object as a payload -->
      <IcecreamItem :icecream="icecream" @add-to-cart="orderIcecream(icecream)" />
      
    </div>

    <!-- 10a. Components Props - Passing the cart prop to the ShoppingCart component -->
    <!-- 10b. Components Events [$emit] - Listening for the remove-from-cart event emitted by the ShoppingCart component and handling it by emitting another event -->
    <ShoppingCart :cart="cart" @remove-from-cart="removeFromCart" />

    <!-- 10a. Components Props - Passing the initialRating prop to the StarsRating component -->
    <!-- 10b. Components Events [$emit] - Listening for the rating-changed event emitted by the StarsRating component and handling it using the updateRating method -->
    <StarsRating :initialRating="rating" @rating-changed="updateRating" />

    <!-- 5a. Class Bindings - Binding the class attribute to the messageClass ref, allowing dynamic updating of the class -->
    <!-- 1a. Text Interpolation - Displaying the message ref as text -->
    <div :class="messageClass">
      {{ message }}
    </div>

    <div v-html="rawHTML"></div>

    <!-- 1c. Attribute Bindings -->
    <!-- <button :id="dynamicId">Dynamic ID</button> -->
    <button :id="dynamicId" @click="changeButtonText" class="large-button">{{ buttonText }}</button>
    <br>
     <!-- 6b. v-for with a range -->
     <div>
      <div v-for="n in 10" :key="n">
        {{ n }}
      </div>
    </div>
    <br>
    <!-- 6c. v-for on a template -->
    <div>
      <template v-for="n in 5" :key="n">
        <div>{{ n }}</div>
        <div>{{ n * n }}</div>
      </template>
    </div>
    <br>
     <!-- 6d. v-for with v-if -->
     <div>
      <div v-for="n in 10" :key="n" v-if="n % 2 === 0">
        {{ n }}
      </div>
    </div>
    <div>
      <form>
      <label for="name">Name: </label>
      <input type="text" id="name" v-model.trim="name" />
      
    </form>

    </div>

    <div>
<!-- 6e. v-for with a component -->
    <CustomComponent v-for="n in 3" :key="n" :number="n" />
    <br>
    <!-- 10c. Slots -->
    <CustomComponentWithSlot>
      <template #default>
        <div>Default slot content</div>
      </template>
      <template #namedSlot>
        <div>Named slot content</div>
      </template>
    </CustomComponentWithSlot>

    </div>

  </div>
</template>


<script setup>
// 3. Reactivity Fundamentals - Importing ref from Vue to create reactive variables
import { ref } from 'vue';
import { watch } from 'vue';
// 10a. Components Props - Importing defineProps to define the props that the component accepts
import { defineProps, defineEmits } from 'vue';

// 10c. Components - Importing other components to use in this component
import IcecreamItem from '../components/IcecreamItem.vue';
import ShoppingCart from '../components/ShoppingCart.vue';
import StarsRating from '../components/StarsRating.vue';

// 10c. Importing components to demonstrate v-for with a component and slots
import CustomComponent from '../components/CustomComponent.vue';
import CustomComponentWithSlot from '../components/CustomComponentWithSlot.vue';

// 3. Reactivity Fundamentals - Using ref to create reactive variables
const icecreams = ref([
  { name: 'Chocolate Cup', price: 2 },
  { name: 'Strawberry Cup', price: 3 },
  { name: 'Vanilla Cup', price: 4 },
]);

// 3. Reactivity Fundamentals - Using defineProps to define the cart prop, making it reactively update when the parent component changes its value
const { cart } = defineProps(['cart']);

// 3. Reactivity Fundamentals - Using ref to create reactive variables
const rating = ref(0);
const message = ref('');
const messageClass = ref('');

const emit = defineEmits();

// Define the items array for the buttons
const items = [
  { name: 'Chocolate Cup', price: 2 },
  { name: 'Strawberry Cup', price: 3 },
  { name: 'Vanilla Cup', price: 4 },
];

// 2. Methods - Defining methods to handle ordering ice cream and updating the rating

const orderIcecream = (item) => {
  if (item) {
    const orderedIcecream = icecreams.value.find(icecream => icecream.name === item.name);
    if (orderedIcecream) {
      try {
        emit('add-to-cart', orderedIcecream);
      } catch (error) {
        console.error('Error adding to cart:', error);
      }

      message.value = `You have ordered ${item.name}`;
      messageClass.value = 'success';
    } else {
      message.value = 'Something went wrong';
      messageClass.value = 'error';
    }
  } else {
    message.value = 'Please select an ice cream to order';
    messageClass.value = 'error';
  }
};

const rawHTML = ref('<span style="color: red;">Raw HTML</span>');
let buttonCounter = 0;
const dynamicId = ref(`button-${buttonCounter++}`);
const buttonText = ref('Dynamic ID');

const updateRating = (newRating) => {
  rating.value = newRating;
  message.value = `You set the rating to ${newRating}`;
  messageClass.value = 'success';
};

const changeButtonText = () => {
  buttonText.value = 'Button Clicked';
  dynamicId.value = `button-${buttonCounter++}`;
};

 // 9. Watchers
 watch(cart, (newVal, oldVal) => {
    console.log('Cart changed:', newVal);
  });
</script>

<style>
/* 5. Class and Style Bindings - Defining styles for different classes */
.success {
  color: green;
}

.error {
  color: red;
}

.large-button {
  width: 200px; /* Adjust the width as needed */
  height: 40px; /* Adjust the height as needed */
  font-size: 16px; /* Adjust the font size as needed */
}

</style>
