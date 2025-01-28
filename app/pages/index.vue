<script setup lang="ts">
const version = 2 + 1
</script>

<template>
  <div class="hello bg-cyan-500" >
    Hello Nuxt {{ version }}!
  </div>
  
  <div class="Menubar w-full flex">
    <div>
      <NuxtLink to="blog"> Blog</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.hello {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3rem;
  padding: 2rem;
}
</style>
