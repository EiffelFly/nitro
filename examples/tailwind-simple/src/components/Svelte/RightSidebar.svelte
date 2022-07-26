<script lang="ts">
  import cn from "clsx";
  import { baseStyles } from "../../styles/base";
  import { AstroPropHeader } from "../../types/astro";
  import TableOfContent from "./TableOfContent.svelte";

  export let headers: AstroPropHeader[];
</script>

<nav
  class={cn("w-full sticky", baseStyles.sidebar.topOffset)}
  aria-labelledby="grid-right"
>
  <div class="h-full overflow-auto">
    <TableOfContent {headers} />
  </div>
</nav>
