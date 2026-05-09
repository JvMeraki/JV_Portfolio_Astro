<script>
  import { useTranslations } from "@/i18n/utils";
  import "@fontsource/potta-one";
  import "@fontsource/rampart-one";
  import RetroGrid from "./RetroGrid.svelte";

  let { lang } = $props();
  // svelte-ignore state_referenced_locally
  const t = useTranslations(lang);
</script>

<div
  class="relative left-1/2 -translate-x-1/2 w-screen flex items-center justify-center rounded-lg bg-background px-10 py-20"
>
  <span
    class="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[var(--color-1)] via-[var(--color-2)] to-[var(--color-3)] bg-clip-text text-center text-7xl font-bold leading-normal tracking-tighter text-transparent font-rampart"
  >
    {t("hero_title")}
  </span>
  <RetroGrid />
</div>
