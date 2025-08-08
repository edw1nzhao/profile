<script lang="ts">
  import { onMount } from 'svelte';
  import { cn } from '$lib/utils/cn';

  export let words: string;
  export let className: string = '';
  export let filter = true;
  export let duration = 0.5;

  let wordsArray = words.split(" ");
  let visibleWords: boolean[] = new Array(wordsArray.length).fill(false);

  onMount(() => {
    wordsArray.forEach((_, idx) => {
      setTimeout(() => {
        visibleWords[idx] = true;
      }, idx * duration * 200);
    });
  });
</script>

<div class={cn("text-5xl font-light md:text-7xl", className)}>
  {#each wordsArray as word, idx}
    <span
      class={cn(
        "opacity-0 transition-opacity duration-300",
        visibleWords[idx] && "opacity-100"
      )}
      style={filter && !visibleWords[idx] ? "filter: blur(8px)" : ""}
    >
      {word}{" "}
    </span>
  {/each}
</div>