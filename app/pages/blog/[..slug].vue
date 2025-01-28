
<script setup>
const slug = useRoute().params.slug
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection('blog').path(slug).first()
})
</script>


<template>
      <ContentRenderer :value="post" />
</template>