<script setup>
import { onMounted } from 'vue';
 const query = gql`
    {
        viewer {
            repositories(first: 8 , orderBy:{direction: DESC, field: CREATED_AT}){
            totalCount
                nodes{
                    id
                    url
                    name
                    description
                    isPrivate
                }
            }
        }
    }
 `
 const {data} = await useAsyncQuery(query);
 onMounted(()=>{
    console.log('list project=>',data);
 })
</script>
<template>
    <div>
        <div class="container mx-auto max-w-7xl">
            <div class="head py-[100px] text-center">
                <h2 class="text-[30px] font-bold ">Project</h2>
                <p>Liste de mes projects:</p>
            </div>
        </div>
    </div>
</template>