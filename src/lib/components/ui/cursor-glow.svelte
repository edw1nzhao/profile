<script lang="ts">
  import { onMount } from 'svelte';

  let cursorRef: HTMLDivElement;
  let mousePosition = { x: 0, y: 0 };
  let isPointer = false;

  onMount(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition = { x: e.clientX, y: e.clientY };
      
      if (cursorRef) {
        cursorRef.style.transform = `translate(${mousePosition.x - 20}px, ${mousePosition.y - 20}px)`;
      }

      const target = e.target as HTMLElement;
      isPointer = window.getComputedStyle(target).cursor === 'pointer' ||
                  target.tagName === 'A' ||
                  target.tagName === 'BUTTON';
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  });
</script>

<div
  bind:this={cursorRef}
  class="pointer-events-none fixed z-50 h-10 w-10 rounded-full blur-xl transition-all duration-300 mix-blend-screen {isPointer ? 'scale-150 bg-primary/30' : 'bg-primary/20'}"
/>