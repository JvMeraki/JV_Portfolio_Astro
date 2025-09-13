<script lang="ts">
  import { cn } from "@/lib/utils";
  import { Github, Instagram, Linkedin } from "lucide-svelte";
  import { Motion, useMotionValue } from "svelte-motion";
  import DockItem from "./DockItem.svelte";

  type DockItem = {
    id: string;
    icon?: {
      component: any;
      props?: Record<string, any>;
      link: string;
    };
  };

  const icons: Record<string, DockItem["icon"]> = {
    github: {
      component: Github,
      props: {
        size: 32,
      },
      link: "https://github.com/JvMeraki",
    },
    linkedin: {
      component: Linkedin,
      props: {
        size: 32,
      },
      link: "https://www.linkedin.com/in/brayanjmartinezp/",
    },
    instagram: {
      component: Instagram,
      props: {
        size: 32,
      },
      link: "https://www.instagram.com/Jv_fearnot",
    },
  };

  export let side: "top" | "bottom" = "bottom";
  export let className: string;
  export { className as class };
  export const items: DockItem[] = [
    { id: "1", icon: icons["github"] },
    { id: "2", icon: icons["linkedin"] },
    { id: "3", icon: icons["instagram"] },
  ];

  const mouseX = useMotionValue(Infinity);
  const containerX = useMotionValue(0);

  let containerRef: HTMLDivElement;
</script>

<div
  class={cn(side === "top" ? "top-4" : "bottom-4", className)}
  style="background-color: var(--background);"
  {...$$restProps}
>
  <Motion let:motion>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      use:motion
      bind:this={containerRef}
      class="h-16 items-end gap-4 rounded-full bg-neutral-950 border border-neutral-800 px-3 pb-2 flex shadow-inner shadow-neutral-300/5"
      style="background-color: var(--background);"
      on:mouseleave={() => mouseX.set(Infinity)}
      on:mousemove={(e) => {
        const rect = containerRef.getBoundingClientRect();
        if (rect) {
          mouseX.set(e.clientX - rect.left);
          containerX.set(rect.x);
        }
      }}
    >
      {#each items as dockItem}
        <DockItem {containerX} {mouseX}>
          {#if dockItem?.icon}
            <a
              href={dockItem.icon.link}
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center w-full h-full hover:text-[var(--orange)]"
            >
              <svelte:component
                this={dockItem.icon.component}
                {...dockItem.icon.props}
              />
            </a>
          {/if}
        </DockItem>
      {/each}
    </div>
  </Motion>
</div>
