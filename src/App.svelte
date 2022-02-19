<script lang="ts">
  import Letters from "./lib/Letters.svelte";
  import words from "./lib/words.json";
  import { onMount, tick } from "svelte";
  import {
    generateEmojiGrid,
    getResult,
    Letter,
    mergeTemplateAndText,
  } from "./lib/util";

  const start = new Date(2022, 1, 18, 0, 0, 0, 0);
  const channleIndex = Math.floor(
    (Date.now() - start.getTime()) / (1000 * 60 * 60 * 24)
  );

  const rawState = localStorage.getItem(`state:${channleIndex}`);

  let initialState = {
    historical: [],
    solved: false,
  };

  if (rawState) {
    initialState = JSON.parse(rawState);
  }

  let text = "";
  const correct = words[channleIndex].toUpperCase();

  let historical: Letter[][] = initialState.historical || [];
  let solved = initialState.solved || false;

  let scrollBox: Element;

  $: isFull =
    text.length ===
    correct.split("").filter((i) => i.toUpperCase() !== i.toLowerCase()).length;

  $: rendered = mergeTemplateAndText(correct, text);

  $: {
    localStorage.setItem(
      `state:${channleIndex}`,
      JSON.stringify({
        historical,
        solved,
      })
    );
  }

  async function handleKeyDown(e: KeyboardEvent) {
    if (solved) return;

    if (!e.metaKey && !e.ctrlKey) {
      if (e.code === "Backspace") {
        text = text.slice(0, -1);
      } else if (e.code === "Enter" && isFull) {
        const result = getResult(
          correct,
          rendered.map((i) => i.letter).join("")
        );

        historical = [...historical, result];
        text = "";

        if (result.every((i) => i.status === "yeah")) {
          solved = true;
        }
        await tick();
        scrollBox.scrollTop = scrollBox.scrollHeight;
      } else if (e.code.startsWith("Key") && !isFull) {
        text += e.key.toUpperCase();
      }
    }
  }

  let copied = false;

  async function shareResults() {
    await navigator.clipboard.writeText(
      generateEmojiGrid(historical, channleIndex)
    );
    copied = true;
  }
</script>

<svelte:window on:keydown={handleKeyDown} />

<main class="pt-10">
  <div class="mb-10">
    <h1 class="text-5xl text-center font-bold">
      {#if solved}
        🎉 Channle 🎉
      {:else}
        Channle
      {/if}
    </h1>
    <h3 class="text-sm text-center text-gray-700">It's not a typo</h3>
  </div>

  <div class="overflow-scroll max-h-[600px]" bind:this={scrollBox}>
    {#each historical as thing, index}
      <Letters text={thing} />
    {/each}

    {#if !solved}
      <Letters text={rendered} />
    {/if}
  </div>

  {#if solved}
    <div class="text-center mt-5">
      <div>🎉 Congrats for solving today's Channle!</div>

      <button
        class="bg-green-700 font-bold px-3 py-2 mt-3 hover:bg-green-800 rounded-md"
        on:click={() => shareResults()}
        >{#if copied}✅ Copied to clipboard!{:else}Share results{/if}</button
      >
    </div>
  {/if}
</main>
