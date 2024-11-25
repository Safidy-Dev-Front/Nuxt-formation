<template>
    <div>

        <div class="head-page">
        <div class="container mx-auto max-w-7xl">
            Liste des produits:
        </div>
        </div>
        <div class="content-page">
            <div class="container mx-auto max-w-7xl">
                <div class="wrapper-list">
                    <ul class="flex flex-wrap  mx-[-10px]">
                        <li class="w-[33.33%] p-[10px]" v-for="product in products" :key="product.id">
                            <div class="item-list">
                                <img class="aspect-[4/4] h-[350px] object-contain" :src="product.image" :alt="product.title" />
                                <p>{{product.title}}</p>
                                <NuxtLink :to="{ name: 'products-id', params: { id: product.id } }">Read more</NuxtLink>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    const {data: products} = useAsyncData(()=>{
        return $fetch('https://fakestoreapi.com/products');
    })
</script>