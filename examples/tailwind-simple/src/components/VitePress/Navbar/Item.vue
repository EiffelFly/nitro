<script lang="ts" setup>
import {
  NavbarItem,
  isExteriorLink,
  isInteriorLink,
} from "../../../nitro.config";

defineProps<{
  item: NavbarItem;
}>();
</script>

<template>
  <a v-if="isInteriorLink(item)" class="text-lg font-medium" :href="item.to">
    {{ item.label }}
  </a>
  <a
    v-if="isExteriorLink(item)"
    :href="item.href"
    target="_blank"
    rel="noopener noreferer"
    class="flex my-auto"
  >
    <img
      v-if="item.icon"
      :src="item.icon.src"
      :width="item.icon.width"
      :height="item.icon.height"
    />
    <p v-else class="my-auto">{{ item.label }}</p>
  </a>
</template>
