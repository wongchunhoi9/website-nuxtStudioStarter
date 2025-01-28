<script setup lang="ts">
const { data: docs } = await useAsyncData('documents-list', () => {
  return queryCollection('blog')
    .order('date', 'DESC')
    .select('title', 'path', 'description','date')
    .all()
})
</script>

<template>
  <div class='bg-amber-300 border-2 m-5'>
    <NuxtLink v-for="doc in docs" :key="doc.path" :to="doc.path" >
        <div class="border-4 m-8 bg-cyan-100">
            <h2>{{ doc.title }}</h2>
            <p>{{ doc.description }}</p>
            <p>{{ doc.date }}</p>

        </div>
    </NuxtLink>
 </div>
</template>