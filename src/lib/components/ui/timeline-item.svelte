<script lang="ts">
  import { cn } from '$lib/utils/cn';
  import FadeIn from './fade-in.svelte';

  export let title: string;
  export let subtitle: string;
  export let description: string = '';
  export let isLast = false;
  export let delay = 0;
</script>

<FadeIn {delay} direction="left">
  <div class="relative flex gap-6">
    <div class="flex flex-col items-center">
      <div class="h-3 w-3 rounded-full bg-primary shadow-lg shadow-primary/20" />
      {#if !isLast}
        <div class="h-full w-0.5 bg-gradient-to-b from-primary/50 to-transparent" />
      {/if}
    </div>
    
    <div class="pb-8 flex-1">
      <div class="group rounded-xl bg-base-200/50 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-base-200/70 hover:shadow-lg">
        <h3 class="text-xl font-semibold text-base-content">{title}</h3>
        <p class="mt-1 text-base-content/70">{subtitle}</p>
        {#if description}
          <p class="mt-3 text-base-content/60">{description}</p>
        {/if}
      </div>
    </div>
  </div>
</FadeIn>