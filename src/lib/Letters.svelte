<script lang="ts">
  import type { Letter } from "./util";

  export let text: Letter[];
</script>

<div class="flex gap-2 justify-center flex-wrap my-2 items-center">
  <div
    class="bg-gray-700 w-10 h-10 flex items-center justify-center text-xl font-bold shrink-0"
  >
    #
  </div>

  {#each text as letter}
    <div
      class="w-10 h-10 flex items-center justify-center text-xl font-bold shrink-0"
      class:bg-gray-600={!letter.status}
      class:bg-green-700={letter.status === "yeah"}
      class:bg-yellow-700={letter.status === "kinda"}
      class:bg-gray-800={letter.status === "nah"}
    >
      {letter.letter}
    </div>
  {/each}
</div>
