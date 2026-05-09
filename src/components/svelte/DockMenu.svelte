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
      link: import.meta.env.PUBLIC_URL_GITHUB,
    },
    linkedin: {
      component: Linkedin,
      props: {
        size: 32,
      },
      link: import.meta.env.PUBLIC_URL_LINKEDIN,
    },
    instagram: {
      component: Instagram,
      props: {
        size: 32,
      },
      link: import.meta.env.PUBLIC_URL_INSTAGRAM,
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
  {...$$restProps}
>
  <Motion let:motion>
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      use:motion
      bind:this={containerRef}
      class="h-16 items-end gap-4 rounded-full px-3 pb-2 flex"
      style="
        background-color: var(--dock-bg);
        border: 1px solid var(--dock-border);
        box-shadow: inset 0 1px 0 var(--dock-shine), 0 4px 16px var(--dock-shadow);
      "
      onmouseleave={() => mouseX.set(Infinity)}
      onmousemove={(e) => {
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
              class="flex items-center justify-center w-full h-full transition-colors duration-200"
              style="color: var(--dock-icon); "
              aria-label={`Visit my '${dockItem.icon.link}' to more info.`}
              onmouseenter={(e) => e.currentTarget.style.color = 'var(--orange)'}
              onmouseleave={(e) => e.currentTarget.style.color = 'var(--dock-icon)'}
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
