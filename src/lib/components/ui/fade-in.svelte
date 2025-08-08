<script lang="ts">
  import { onMount } from 'svelte';
  import { cn } from '$lib/utils/cn';

  export let delay = 0;
  export let duration = 600;
  export let className: string = '';
  export let direction: 'up' | 'down' | 'left' | 'right' = 'up';

  let isVisible = false;
  let elementRef: HTMLDivElement;

  const directionOffset = {
    up: 'translateY(20px)',
    down: 'translateY(-20px)',
    left: 'translateX(20px)',
    right: 'translateX(-20px)'
  };

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              isVisible = true;
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef) {
      observer.observe(elementRef);
    }

    return () => {
      if (elementRef) {
        observer.unobserve(elementRef);
      }
    };
  });
</script>

<div
  bind:this={elementRef}
  class={cn(
    "transition-all",
    className
  )}
  style="
    opacity: {isVisible ? 1 : 0};
    transform: {isVisible ? 'translateY(0) translateX(0)' : directionOffset[direction]};
    transition-duration: {duration}ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  "
>
  <slot />
</div>