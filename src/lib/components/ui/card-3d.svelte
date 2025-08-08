<script lang="ts">
  import { onMount } from 'svelte';
  import { cn } from '$lib/utils/cn';

  export let className: string = '';
  export let containerClassName: string = '';
  
  let containerRef: HTMLDivElement;
  let isHovered = false;
  let rotateX = 0;
  let rotateY = 0;

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef || !isHovered) return;

    const rect = containerRef.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPct = (x - width / 2) / (width / 2);
    const yPct = (y - height / 2) / (height / 2);

    rotateX = yPct * -10;
    rotateY = xPct * 10;
  };

  const handleMouseEnter = () => {
    isHovered = true;
  };

  const handleMouseLeave = () => {
    isHovered = false;
    rotateX = 0;
    rotateY = 0;
  };
</script>

<div
  bind:this={containerRef}
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
  on:mousemove={handleMouseMove}
  class={cn(
    "relative transition-all duration-200 ease-linear",
    containerClassName
  )}
  style="transform-style: preserve-3d; transform: perspective(1000px) rotateX({rotateX}deg) rotateY({rotateY}deg)"
>
  <div
    class={cn(
      "bg-base-300 rounded-xl border border-base-content/10 shadow-xl",
      "transition-all duration-200",
      isHovered && "shadow-2xl",
      className
    )}
  >
    <slot />
  </div>
</div>