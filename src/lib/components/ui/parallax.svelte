<script lang="ts">
  import { onMount } from 'svelte';
  import { cn } from '$lib/utils/cn';

  export let className: string = '';
  export let offset = 50;
  
  let scrollY = 0;
  let elementRef: HTMLDivElement;
  let isVisible = false;

  onMount(() => {
    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0 }
    );

    if (elementRef) {
      observer.observe(elementRef);
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (elementRef) {
        observer.unobserve(elementRef);
      }
    };
  });

  $: transform = isVisible ? `translateY(${scrollY * 0.5}px)` : '';
</script>

<div
  bind:this={elementRef}
  class={cn("transition-transform duration-75 ease-out", className)}
  style="transform: {transform}"
>
  <slot />
</div>