<script>
  import "@fontsource/potta-one";
  import "@fontsource/rampart-one";
  import RetroGrid from "./RetroGrid.svelte";
</script>

<!-- <div
  class="relative left-1/2 -translate-x-1/2 w-screen flex items-center justify-center rounded-lg bg-background p-20"
> -->
<div
  class="relative left-1/2 -translate-x-1/2 w-screen flex items-center justify-center rounded-lg bg-background px-10 py-20"
>
  <!-- <span
    class="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ff0000] via-[#ff6900] to-[#D1D2DB] bg-clip-text text-center text-7xl font-bold leading-tight tracking-tighter text-transparent"
  >
    Welcome to my portfolio
  </span> -->
  <span
    class="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#B84E07] via-[#ff6900] to-[#BA4E00] bg-clip-text text-center text-7xl font-bold leading-normal tracking-tighter text-transparent font-rampart"
  >
    Welcome to my portfolio
  </span>
  <RetroGrid />
</div>
