<template>
  <table>
  <tr>
    <td>Name</td>
    <td>{{ name }}</td>
  </tr>
  <tr>
    <td>Email</td>
    <td>{{email }}</td>
  </tr>
 
  <tr>
    <td>Phone</td>
    <td>{{phone }}</td>
  </tr>
 
  <tr>
    <td>sum</td>
    <td>{{sum }}</td>
  </tr>
 
</table>
</template>

<script setup>
const props = defineProps({
  name: String,
  email: String,
  phone: String,
  num1: Number,
  num2: Number,
  sum:Number
  
});
</script>

<style  scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>