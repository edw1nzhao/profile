<script lang="ts">
  import { onMount } from 'svelte';
  import { cn } from '$lib/utils/cn';

  export let className: string = '';
  export let containerClassName: string = '';
  export let borderClassName: string = '';
  export let duration = 2000;
  export let href: string | undefined = undefined;

  let pathRef: SVGPathElement;

  onMount(() => {
    if (!pathRef) return;
    const length = pathRef.getTotalLength();
    pathRef.style.strokeDasharray = `${length} ${length}`;
    pathRef.style.strokeDashoffset = `${length}`;
  });
</script>

<svelte:element
  this={href ? 'a' : 'div'}
  {href}
  class={cn(
    "relative inline-flex overflow-hidden rounded-lg p-[1px]",
    containerClassName
  )}
>
  <div
    class={cn(
      "absolute inset-0",
      borderClassName
    )}
  >
    <svg
      class="absolute inset-0 h-full w-full"
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path
        bind:this={pathRef}
        d="M 0,0 L 100,0 L 100,100 L 0,100 Z"
        stroke="url(#gradient)"
        stroke-width="2"
        fill="none"
        class="animate-border"
        style="animation-duration: {duration}ms"
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#4A78DD" />
          <stop offset="50%" stop-color="#6A98FF" />
          <stop offset="100%" stop-color="#4A78DD" />
        </linearGradient>
      </defs>
    </svg>
  </div>
  
  <div
    class={cn(
      "relative bg-base-100 px-4 py-2 rounded-lg",
      className
    )}
  >
    <slot />
  </div>
</svelte:element>

<style>
  @keyframes border {
    to {
      stroke-dashoffset: 0;
    }
  }
  
  .animate-border {
    animation: border linear infinite;
  }
</style>