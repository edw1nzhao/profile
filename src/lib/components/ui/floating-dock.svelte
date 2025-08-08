<script lang="ts">
  import { cn } from '$lib/utils/cn';
  import { onMount } from 'svelte';

  export let items: Array<{
    title: string;
    icon: any;
    href: string;
  }>;
  export let className: string = '';

  let mouseX = 0;
  let dockRef: HTMLDivElement;

  const handleMouseMove = (e: MouseEvent) => {
    if (!dockRef) return;
    const rect = dockRef.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
  };

  const handleMouseLeave = () => {
    mouseX = -100;
  };

  const getScale = (index: number, itemWidth: number) => {
    const center = index * itemWidth + itemWidth / 2;
    const distance = Math.abs(mouseX - center);
    const scale = Math.max(1, 1.5 - distance / 200);
    return scale;
  };
</script>

<div
  bind:this={dockRef}
  on:mousemove={handleMouseMove}
  on:mouseleave={handleMouseLeave}
  class={cn(
    "flex items-center justify-center gap-2 rounded-full bg-base-300/80 backdrop-blur-md border border-base-content/10 px-4 py-3",
    className
  )}
>
  {#each items as item, index}
    <a
      href={item.href}
      class="relative flex items-center justify-center transition-all duration-200"
      style="transform: scale({mouseX > 0 ? getScale(index, 60) : 1})"
    >
      <div class="flex flex-col items-center">
        <svelte:component this={item.icon} class="h-6 w-6" />
        <span class="absolute -bottom-8 text-xs opacity-0 transition-opacity hover:opacity-100">
          {item.title}
        </span>
      </div>
    </a>
  {/each}
</div>