<script lang="ts">
  import { onMount } from 'svelte';
  import { cn } from '$lib/utils/cn';

  export let className: string = '';
  export let quantity = 30;
  export let staticity = 50;
  export let ease = 50;

  let canvasRef: HTMLCanvasElement;
  let canvasCtx: CanvasRenderingContext2D | null = null;
  let canvasContainerRef: HTMLDivElement;

  let circles: any[] = [];
  let mouse = { x: 0, y: 0 };
  let canvasSize = { w: 0, h: 0 };
  let dpr = 1;

  onMount(() => {
    if (canvasRef) {
      canvasCtx = canvasRef.getContext('2d');
    }
    resizeCanvas();
    initCircles();
    animate();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', onMouseMove);
    };
  });

  const onMouseMove = (e: MouseEvent) => {
    if (canvasRef) {
      const rect = canvasRef.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }
  };

  const resizeCanvas = () => {
    if (canvasContainerRef && canvasRef) {
      circles.length = 0;
      canvasSize.w = canvasContainerRef.offsetWidth;
      canvasSize.h = canvasContainerRef.offsetHeight;
      canvasRef.width = canvasSize.w * dpr;
      canvasRef.height = canvasSize.h * dpr;
      canvasRef.style.width = canvasSize.w + 'px';
      canvasRef.style.height = canvasSize.h + 'px';
      if (canvasCtx) {
        canvasCtx.scale(dpr, dpr);
      }
    }
  };

  const initCircles = () => {
    for (let i = 0; i < quantity; i++) {
      circles.push({
        x: Math.random() * canvasSize.w,
        y: Math.random() * canvasSize.h,
        translateX: 0,
        translateY: 0,
        size: Math.random() * 2 + 0.5,
        alpha: 0,
        targetAlpha: Math.random() * 0.6 + 0.1,
        dx: (Math.random() - 0.5) * 0.2,
        dy: (Math.random() - 0.5) * 0.2,
        magnetism: 0.1 + Math.random() * 4,
      });
    }
  };

  const drawCircle = (circle: any, update = false) => {
    if (canvasCtx) {
      const { x, y, translateX, translateY, size, alpha } = circle;

      canvasCtx.translate(translateX, translateY);
      canvasCtx.beginPath();
      canvasCtx.arc(x, y, size, 0, 2 * Math.PI);
      canvasCtx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
      canvasCtx.fill();
      canvasCtx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (!update) {
        circle.alpha += (circle.targetAlpha - circle.alpha) * 0.02;
      }
    }
  };

  const drawParticles = () => {
    if (canvasCtx) {
      canvasCtx.clearRect(0, 0, canvasSize.w, canvasSize.h);
    }
    
    circles.forEach((circle) => {
      const edge = [
        circle.x + circle.translateX - circle.size,
        canvasSize.w - circle.x - circle.translateX - circle.size,
        circle.y + circle.translateY - circle.size,
        canvasSize.h - circle.y - circle.translateY - circle.size,
      ];
      const closestEdge = edge.reduce((a, b) => Math.min(a, b));
      const remapClosestEdge = Math.max(0, 1 - closestEdge / 20);

      circle.x += circle.dx;
      circle.y += circle.dy;
      
      if (circle.x < 0 || circle.x > canvasSize.w) circle.dx *= -1;
      if (circle.y < 0 || circle.y > canvasSize.h) circle.dy *= -1;

      if (mouse.x > 0 && mouse.y > 0) {
        const distanceFromMouse = Math.hypot(mouse.x - circle.x, mouse.y - circle.y);
        if (distanceFromMouse < 100) {
          const distanceRatio = (100 - distanceFromMouse) / 100;
          const force = distanceRatio * circle.magnetism;
          const angle = Math.atan2(circle.y - mouse.y, circle.x - mouse.x);
          circle.translateX += Math.cos(angle) * force;
          circle.translateY += Math.sin(angle) * force;
        }
      }

      circle.translateX *= 0.95;
      circle.translateY *= 0.95;

      drawCircle(circle, true);
    });
  };

  const animate = () => {
    drawParticles();
    requestAnimationFrame(animate);
  };
</script>

<div
  bind:this={canvasContainerRef}
  class={cn("pointer-events-none absolute inset-0", className)}
>
  <canvas bind:this={canvasRef} />
</div>