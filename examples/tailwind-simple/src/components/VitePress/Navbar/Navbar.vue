<script lang="ts" setup>
import { NAVBAR, NavbarItem } from "../../../nitro.config";
import { baseStyles } from "../../../styles/base";
import cn from "clsx";
import Item from "./Item.vue";

const { logo, title, items } = NAVBAR;

let leftItems: NavbarItem[] = [];
let rightItems: NavbarItem[] = [];

items.forEach((item) => {
  if (item.position === "right") {
    rightItems.push(item);
  } else {
    leftItems.push(item);
  }
});
</script>

<template>
  <nav
    :class="
      cn(
        'w-full z-10 sticky top-0 flex py-4 px-10 bg-white',
        baseStyles.headerHeight
      )
    "
    title="Top Navigation"
  >
    <div class="flex items-center justify-end gap-x-4 w-full py-2">
      <div class="logo flex mr-4">
        <a class="flex flex-row gap-x-3" href="/">
          <img
            :src="NAVBAR.logo.src"
            :alt="logo.alt"
            :width="logo.width"
            :height="logo.height"
          />
          <h1 class="text-xl font-bold">{{ title }}</h1>
        </a>
      </div>
      <div class="flex-1 grid grid-cols-2">
        <div class="w-full flex flex-row">
          <Item v-for="item in leftItems" :item="item" />
        </div>
        <div class="w-full flex flex-row justify-end">
          <Item v-for="item in rightItems" :item="item" />
        </div>
      </div>
    </div>
  </nav>
</template>
