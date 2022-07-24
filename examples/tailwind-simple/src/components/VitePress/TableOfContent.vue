<script lang="ts" setup>
import { AstroPropHeader } from "../../types/astro";
import { SIDEBAR } from "../../nitro.config";

const props = defineProps<{
  headers: AstroPropHeader[];
}>();

const displayHeaders = props.headers.filter(
  ({ depth }) =>
    depth >= SIDEBAR.rightSidebar.headerMinDepth &&
    depth <= SIDEBAR.rightSidebar.headerMaxDepth
);
</script>

<template>
  <h2 class="mb-4">On this page</h2>
  <ul>
    <li
      v-for="header in displayHeaders"
      class="group text-sm py-0.5 my-2.5 pl-4 border-l-2 border-slate-300 hover:border-slate-700"
    >
      <a
        class="truncate block text-slate-600 group-hover:text-slate-900"
        href="{`#${header.slug}`}"
      >
        {{ header.text }}
      </a>
    </li>
  </ul>
</template>
