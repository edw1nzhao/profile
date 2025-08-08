<script lang="ts">
  import { onMount } from 'svelte';
  import { cn } from '$lib/utils/cn';

  export let className: string = '';
  export let fill: string = 'white';

  let spotlightRef: HTMLDivElement;
  let mousePosition = { x: 0, y: 0 };

  onMount(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.body.getBoundingClientRect();
      mousePosition = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
      
      if (spotlightRef) {
        spotlightRef.style.background = `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(74, 120, 221, 0.15), transparent 80%)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  });
</script>

<div
  bind:this={spotlightRef}
  class={cn(
    "pointer-events-none fixed inset-0 z-30 transition duration-300",
    className
  )}
/>