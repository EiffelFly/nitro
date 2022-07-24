<script lang="ts" setup>
import { ref } from "vue";
import { SidebarElement } from "../../../nitro.config";
import IconMinusSquare from "./IconMinusSquare.vue";
import IconPlusSquare from "./IconPlusSquare.vue";
import cn from "clsx";

const props = defineProps<{
  text?: string;
  items: SidebarElement[];
  collapsible?: boolean;
  collapsed?: boolean;
}>();

const collapsed = ref(false);
const baseIconStyle = "absolute w-4 h-4 top-2 bottom-2 right-2 fill-slate-500";

const toggle = () => {
  if (props.collapsible) {
    collapsed.value = !collapsed.value;
  }
};
</script>

<template>
  <section
    class="flex flex-col w-full pt-2"
    :class="{ 'pb-2': collapsed, 'pb-6': !collapsed }"
  >
    <div
      v-if="text"
      @click="toggle"
      :role="collapsible ? 'button' : undefined"
      :class="cn('flex flex-row', { 'mb-4': !collapsed })"
    >
      <h2 class="my-auto flex-1 font-semibold text-sm">
        {{ text }}
      </h2>
      <div v-if="collapsible" class="relative w-8 h-8">
        <IconMinusSquare
          :styleName="
            collapsed
              ? cn(baseIconStyle, 'opacity-0')
              : cn(baseIconStyle, 'opacity-1')
          "
        />
        <IconPlusSquare
          :styleName="
            collapsed
              ? cn(baseIconStyle, 'opacity-1')
              : cn(baseIconStyle, 'opacity-0')
          "
        />
      </div>
      <div v-else class="relative w-8 h-8"></div>
    </div>
    <div
      class="flex flex-col gap-y-2"
      :class="{
        hidden: collapsed,
      }"
    >
      <template v-for="item in items" :key="item.link">
        <a
          class="font-normal text-sm text-slate-500 hover:text-slate-800"
          :href="item.link"
          >{{ item.text }}</a
        >
      </template>
    </div>
  </section>
</template>
