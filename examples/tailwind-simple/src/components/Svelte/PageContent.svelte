<script lang="ts">
  export let title: string;
</script>

<article id="article" class="p-0 w-full h-full flex flex-col">
  <section class="prose mb-16">
    <h1 class="content-title" id="overview">{title}</h1>
    <slot />
  </section>
</article>
