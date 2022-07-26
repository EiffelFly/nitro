<script lang="ts" setup>
  import { SidebarElement, SidebarSection } from "../../../nitro.config";
  import { baseStyles } from "../../../styles/base";
  import cn from "clsx";
  import Section from "./Section.svelte";

  const { sidebar } = baseStyles;

  export let elements: SidebarElement[];
  export let currentPagePath: string;

  const sidebarSections = elements.reduce<SidebarSection[]>((col, item, i) => {
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
  }, []);
</script>

<nav
  class={cn("sticky w-full flex flex-col", sidebar.topOffset)}
  aria-labelledby="grid-right"
>
  {#each sidebarSections as section}
    <div class="w-full border-t">
      <Section
        items={section.children}
        text={section.text}
        collapsible={section.collapsible}
        {currentPagePath}
      />
    </div>
  {/each}
</nav>
