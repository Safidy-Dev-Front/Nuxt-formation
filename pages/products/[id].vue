<script setup lang="ts">
 import { onMounted , ref } from 'vue';
    const route = useRoute();
    const id = route.params.id;
    const { status, data: product } = await useFetch(`https://fakestoreapi.com/products/${id}`)
    
    const newProduct = ref<any >(product) 
</script>
<template>
    <div>
       <div class="head-product">
        <h1>{{ newProduct.title }}</h1>
        <img :src="newProduct.image" :alt="newProduct.title">
        <div>{{ newProduct.price }}</div>
        <div>{{ newProduct.description }}</div>
       </div>
    </div>
</template>

