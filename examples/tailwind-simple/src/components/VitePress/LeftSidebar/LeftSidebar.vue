<script lang="ts" setup>
import { computed } from "@vue/reactivity";
import { SidebarElement, SidebarSection } from "../../../nitro.config";
import Section from "./Section.vue";
import { baseStyles } from "../../../styles/base";
import cn from "clsx";

export type LeftSidebarProps = {
  elements: SidebarElement[];
};

const { sidebar } = baseStyles;

const props = defineProps<LeftSidebarProps>();

const sidebarSections = computed(() =>
  props.elements.reduce<SidebarSection[]>((col, item, i) => {
    // If the first item is not a section header, create a new container section.
    if (i === 0) {
      if (!item.header) {
        const pesudoSection = { text: "" };
        col.push({ ...pesudoSection, children: [], collapsible: true });
      }
    }
    if (item.header) {
      col.push({
        ...item,
        children: [],
        collapsible: item.collapsible ?? false,
      });
    } else {
      col[col.length - 1].children.push(item);
    }
    return col;
  }, [])
);
</script>

<template>
  <nav :class="cn('sticky w-full flex flex-col', sidebar.topOffset)">
    <div
      class="w-full border-t"
      v-for="section in sidebarSections"
      :key="section.text"
    >
      <Section
        :items="section.children"
        :text="section.text"
        :collapsible="section.collapsible"
      />
    </div>
  </nav>
</template>
