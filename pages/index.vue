<template>
    <div>
        <div class="hero pt-[200px] pb-[200px]">
            <h1 class="text-center text-[50px] font-black">Salut les gens</h1>
        </div>
        <div class="container mx-auto max-w-7xl">
            <div v-for="item in reactive_array">
              {{item.name}}
            </div>

            <button @click="increment">Increment {{ count }}</button>
        </div>
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