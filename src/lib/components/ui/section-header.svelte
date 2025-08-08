<script lang="ts">
  import { cn } from '$lib/utils/cn';

  export let title: string;
  export let sticky = false;
  export let className: string = '';
</script>

<div
  class={cn(
    "mb-6",
    sticky && "sticky top-16 z-20 -mx-8 px-8 py-4 backdrop-blur-md bg-base-100/80",
    className
  )}
>
  <h2 class="text-3xl font-semibold text-base-content">
    {title}
  </h2>
  <div class="mt-2 h-0.5 w-20 bg-gradient-to-r from-primary to-transparent" />
</div>