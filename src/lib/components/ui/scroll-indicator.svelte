<script lang="ts">
  import { onMount } from 'svelte';

  let scrollY = 0;
  let windowHeight = 0;

  onMount(() => {
    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    const handleResize = () => {
      windowHeight = window.innerHeight;
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  });

  $: opacity = Math.max(0, 1 - (scrollY / (windowHeight * 0.5)));
</script>

{#if opacity > 0}
  <div 
    class="fixed bottom-8 left-1/2 -translate-x-1/2 z-20 transition-opacity duration-300"
    style="opacity: {opacity}"
  >
    <div class="relative">
      <div class="animate-bounce">
        <svg 
          class="w-6 h-6 text-base-content/60"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
      <div class="absolute inset-0 animate-ping">
        <svg 
          class="w-6 h-6 text-primary/30"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  </div>
{/if}