<script setup>
import { ref,computed } from "vue";
import HelloWorld from './components/HelloWorld.vue'
import ViewUserData from "./ViewUserData.vue";
import TheWelcome from './components/TheWelcome.vue'
import { useStore } from 'vuex'
const store = useStore()
const name=ref('')
const email=ref('')
const phone=ref('')
const num1=ref(0)
const num2=ref(0)

const sum=ref(0)
const addSum=()=>{
  sum.value=num1.value+num2.value
  const payload={
    num1:num1.value,
     num2:num2.value
  }
store.commit('addNum',payload)
}

</script>

<template>

<div class="container">

<input placeholder="Enter your name" type="text" v-model="name">
<input placeholder="Enter your email" type="text" v-model="email">
<input placeholder="Enter your phone" type="number" v-model.number="phone">

<div>
  <input placeholder="Enter your num1" type="number" v-model.number="num1">
  <input placeholder="Enter your num2" type="number" v-model.number="num2">
  <button @click="addSum">Show Sum</button>
 
</div>
<div  class='table'>
  
  <ViewUserData :name="name" :email="email" :phone="phone" :num1="num2" :num2="num2" :sum="sum" />
</div>
</div>

</template>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
}
.container input{
  margin: 10px 10px;
}
.table{
  margin-top: 2rem;
}
</style>
