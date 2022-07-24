<script lang="ts" setup>
const props = defineProps<{
  title: string;
}>();
</script>

<template>
  <article id="article" class="p-0 w-full h-full flex flex-col">
    <section class="prose mb-16">
      <h1 class="content-title" id="overview">{{ props.title }}</h1>
      <slot></slot>
    </section>
  </article>
</template>
