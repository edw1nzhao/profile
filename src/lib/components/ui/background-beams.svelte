<script lang="ts">
  import { onMount } from 'svelte';
  import { cn } from '$lib/utils/cn';

  export let className: string = '';

  let canvasRef: HTMLCanvasElement;
  let mousePosition = { x: 0, y: 0 };

  onMount(() => {
    if (!canvasRef) return;
    
    const canvas = canvasRef;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const beams = Array.from({ length: 20 }, () => ({
      x: Math.random() * canvas.width,
      y: 0,
      velocity: Math.random() * 0.5 + 0.5,
      width: Math.random() * 2 + 1,
      length: Math.random() * 200 + 100,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      beams.forEach((beam) => {
        beam.y += beam.velocity;

        if (beam.y > canvas.height) {
          beam.y = -beam.length;
          beam.x = Math.random() * canvas.width;
        }

        const gradient = ctx.createLinearGradient(
          beam.x,
          beam.y,
          beam.x,
          beam.y + beam.length
        );
        
        gradient.addColorStop(0, 'rgba(74, 120, 221, 0)');
        gradient.addColorStop(0.5, 'rgba(74, 120, 221, 0.3)');
        gradient.addColorStop(1, 'rgba(74, 120, 221, 0)');

        ctx.fillStyle = gradient;
        ctx.fillRect(beam.x - beam.width / 2, beam.y, beam.width, beam.length);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  });
</script>

<canvas
  bind:this={canvasRef}
  class={cn(
    "pointer-events-none fixed inset-0 z-0 opacity-50",
    className
  )}
/>