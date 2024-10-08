<template>
    <div>
        <nav>
            <ul>
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/products">Prod</NuxtLink></li>
            </ul>
        </nav>
        <slot />
    </div>
</template>
<script setup>

</script>
<style scoped>
    nav{
        width: 100%;
        margin-top: 10px;
    }
    nav ul{
        list-style: none;
        padding: 0;
    }
    nav li{
        display: inline-block;
        margin-inline: 5px;
    }
</style>