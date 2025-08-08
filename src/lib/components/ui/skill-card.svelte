<script lang="ts">
  import { cn } from '$lib/utils/cn';
  import { onMount } from 'svelte';

  export let title: string;
  export let skills: string[];
  export let className: string = '';
  export let delay = 0;

  let cardRef: HTMLDivElement;
  let mousePosition = { x: 0, y: 0 };
  let isHovered = false;
  let rotateX = 0;
  let rotateY = 0;

  const handleMouseMove = (e: MouseEvent) => {
    if (!cardRef || !isHovered) return;

    const rect = cardRef.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mousePosition = { x, y };
    
    const xPct = (x - rect.width / 2) / (rect.width / 2);
    const yPct = (y - rect.height / 2) / (rect.height / 2);
    
    rotateX = yPct * -5;
    rotateY = xPct * 5;
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
  bind:this={cardRef}
  on:mousemove={handleMouseMove}
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
  class={cn(
    "group relative overflow-hidden rounded-2xl bg-gradient-to-br from-base-200 to-base-300 p-6 shadow-lg transition-all duration-300 hover:shadow-2xl",
    className
  )}
  style="animation-delay: {delay}ms; transform: perspective(1000px) rotateX({rotateX}deg) rotateY({rotateY}deg) scale({isHovered ? 1.02 : 1})"
>
  <div 
    class="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    style="background: radial-gradient(circle at {mousePosition.x}px {mousePosition.y}px, rgba(74, 120, 221, 0.2), transparent 50%)"
  />
  
  <h3 class="relative mb-4 text-xl font-semibold text-base-content transition-transform duration-300 group-hover:translate-x-1">
    {title}
  </h3>
  
  <div class="relative flex flex-wrap gap-2">
    {#each skills as skill, i}
      <span 
        class="skill-tag rounded-full bg-base-100/50 px-3 py-1 text-sm backdrop-blur-sm transition-all duration-200 hover:bg-base-100/70 hover:scale-110 hover:shadow-lg"
        style="animation-delay: {delay + i * 50}ms"
      >
        {skill}
      </span>
    {/each}
  </div>
</div>

<style>
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .skill-tag {
    animation: fadeInUp 0.5s ease-out forwards;
    opacity: 0;
  }
</style>