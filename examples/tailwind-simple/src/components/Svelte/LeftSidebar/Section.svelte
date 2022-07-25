<script lang="ts">
  import { SidebarElement } from "../../../nitro.config";
  import cn from "clsx";
  import IconMinusSquare from "./IconMinusSquare.svelte";
  import IconPlusSquare from "./IconPlusSquare.svelte";

  export let text: string;
  export let items: SidebarElement[];
  export let currentPagePath: string;
  export let collapsible: boolean = true;
  export let collapsed: boolean = false;

  const baseIconStyle =
    "absolute w-4 h-4 top-2 bottom-2 right-2 fill-slate-500";

  const toggle = () => {
    if (collapsible) {
      collapsed = !collapsed;
    }
  };
</script>

<section class={cn("flex flex-col w-full pt-2", collapsed ? "pb-2" : "pb-6")}>
  <div
    on:click={toggle}
    role={collapsible ? "button" : undefined}
    class={cn("flex flex-row", { "mb-4": !collapsed })}
  >
    <h2 class="my-auto flex-1 font-semibold text-sm">
      {text}
    </h2>
    {#if collapsible}
      <div class="relative w-8 h-8">
        <IconMinusSquare
          styleName={collapsed
            ? cn(baseIconStyle, "opacity-0")
            : cn(baseIconStyle, "opacity-1")}
        />
        <IconPlusSquare
          styleName={collapsed
            ? cn(baseIconStyle, "opacity-1")
            : cn(baseIconStyle, "opacity-0")}
        />
      </div>
    {:else}
      <div class="relative w-8 h-8" />
    {/if}
  </div>
  <div
    class={cn("flex flex-col gap-y-2", {
      hidden: collapsed,
    })}
  >
    {#each items as item}
      <a
        class={cn(
          "font-normal text-sm hover:text-gray-800",
          item.link === currentPagePath.slice(1)
            ? "text-gray-800"
            : "text-gray-400"
        )}
        href={item.link}>{item.text}</a
      >
    {/each}
  </div>
</section>
