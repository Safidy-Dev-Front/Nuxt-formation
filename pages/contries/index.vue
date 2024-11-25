<script setup>
    import { onMounted } from 'vue';

    const QUERYCOUNTRIES = gql`
                {
                 countries {
                    code
                    name
                    phone
                    capital
                    emoji
                    continent {
                        name
                    }
                }
                }`;
    const {data} = await useAsyncQuery(QUERYCOUNTRIES,{} , 'secondClient' );
    onMounted(()=>{
        console.log('Data=>', data); 
    })
</script>
<template>
    <div>
        <div class="head-page">
        <div class="container mx-auto max-w-7xl">
            Liste des Continents du planete Terre:
        </div>
        </div>
    </div>
</template>