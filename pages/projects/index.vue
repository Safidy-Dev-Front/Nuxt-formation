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
 const {data} =  useAsyncQuery(query);
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
            <div class="liste-project flex flex-wrap mx-[-10px]">
                <div v-for="item in data?.viewer.repositories.nodes" class="item w-[50%] py-[20px] my-[20px] px-[10px]">
                    <div class="content">
                        <p class="name">{{ item.name }}</p>
                        <p class="description">{{ item.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>