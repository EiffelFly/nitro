<script lang="ts" setup>
import cn from "clsx";
import { baseStyles } from "../../styles/base";
import { AstroPropHeader } from "../../types/astro";
import TableOfContent from "./TableOfContent.vue";

const props = defineProps<{
  headers: AstroPropHeader[];
}>();
</script>

<template>
  <nav
    :class="cn('w-full sticky', baseStyles.sidebar.topOffset)"
    aria-labelledby="grid-right"
  >
    <div class="h-full overflow-auto">
      <TableOfContent :headers="props.headers" />
    </div>
  </nav>
</template>
