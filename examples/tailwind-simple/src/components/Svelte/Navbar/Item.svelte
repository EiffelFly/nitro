<script lang="ts">
  import { NavbarItem, isInteriorLink } from "../../../nitro.config";

  export let item: NavbarItem;
</script>

{#if isInteriorLink(item)}
  <a class="text-lg font-medium" href={item.to}>
    {item.label}
  </a>
{:else}
  <a
    href={item.href}
    target="_blank"
    rel="noopener noreferer"
    class="flex my-auto"
  >
    {#if item.icon}
      <img
        src={item.icon.src}
        width={item.icon.width}
        height={item.icon.height}
        alt={item.icon.alt}
      />
    {:else}
      <p v-else class="my-auto">{item.label}}</p>
    {/if}
  </a>
{/if}
