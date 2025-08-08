<script lang="ts">
  import { onMount } from 'svelte';
  import { cn } from '$lib/utils/cn';

  export let className: string = '';
  export let href: string | undefined = undefined;
  
  let buttonRef: HTMLElement;
  let isHovered = false;
  let transform = { x: 0, y: 0 };
  let textTransform = { x: 0, y: 0 };

  const handleMouseMove = (e: MouseEvent) => {
    if (!buttonRef || !isHovered) return;

    const rect = buttonRef.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xPct = (x - rect.width / 2) / (rect.width / 2);
    const yPct = (y - rect.height / 2) / (rect.height / 2);
    
    transform = {
      x: xPct * 10,
      y: yPct * 10
    };
    
    textTransform = {
      x: xPct * 5,
      y: yPct * 5
    };
  };

  const handleMouseEnter = () => {
    isHovered = true;
  };

  const handleMouseLeave = () => {
    isHovered = false;
    transform = { x: 0, y: 0 };
    textTransform = { x: 0, y: 0 };
  };
</script>

<svelte:element
  this={href ? 'a' : 'button'}
  {href}
  bind:this={buttonRef}
  on:mousemove={handleMouseMove}
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
  class={cn(
    "relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium transition-all duration-300 ease-out rounded-lg group",
    className
  )}
  style="transform: translate({transform.x}px, {transform.y}px)"
>
  <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-primary/20 rounded-full group-hover:w-56 group-hover:h-56"></span>
  <span 
    class="relative transition-transform duration-300"
    style="transform: translate({textTransform.x}px, {textTransform.y}px)"
  >
    <slot />
  </span>
</svelte:element>