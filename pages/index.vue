<template>
    <div>
        <h1>Salut les gens</h1>
        <h1>Hello world</h1>
    <div v-for="item in reactive_array">
      {{item.name}}
    </div>
    <button @click="increment">Increment {{ count }}</button>
    </div>
</template>
<script setup>
import { ref , onMounted} from 'vue';
  const count = ref(0);
  const increment = () => count.value++;
  const {data} = await useFetch('https://jsonplaceholder.typicode.com/users');
  const reactive_array = reactive(data);
  onMounted(()=>{
    console.log('Users=>',  reactive_array.value);
  })
</script>