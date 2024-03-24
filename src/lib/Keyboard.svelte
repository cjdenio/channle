<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function dispatchKeyPress(key: string) {
    dispatch("keypress", {
      key,
    });
  }

  export let disabledLetters: string[] = [];
  export let foundLetters: string[] = [];
</script>

<div class="max-w-xl w-full flex gap-2 flex-col items-stretch mb-10">
  <div class="flex gap-2">
    <div
      class="{disabledLetters.includes("q") ? "bg-gray-800" : foundLetters.includes("q") ? "bg-green-700" : "bg-gray-500"} py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("q")}
    >
      Q
    </div>
    <button
      class="{disabledLetters.includes("w") ? "bg-gray-800" : foundLetters.includes("w") ? "bg-green-700" : "bg-gray-500"} py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("w")}
    >
      W
    </button>
    <button
      class="{disabledLetters.includes("e") ? "bg-gray-800" : foundLetters.includes("e") ? "bg-green-700" : "bg-gray-500"} py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("e")}
    >
      E
    </button>
    <button
      class="{disabledLetters.includes("r") ? "bg-gray-800" : foundLetters.includes("r") ? "bg-green-700" : "bg-gray-500"} py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("r")}
    >
      R
    </button>
    <button
      class="{disabledLetters.includes("t") ? "bg-gray-800" : foundLetters.includes("t") ? "bg-green-700" : "bg-gray-500"} py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("t")}
    >
      T
    </button>
    <button
      class="{disabledLetters.includes("y") ? "bg-gray-800" : foundLetters.includes("y") ? "bg-green-700" : "bg-gray-500"} py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("y")}
    >
      Y
    </button>
    <button
      class="{disabledLetters.includes("u") ? "bg-gray-800" : foundLetters.includes("u") ? "bg-green-700" : "bg-gray-500"} py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("u")}
    >
      U
    </button>
    <button
      class="{disabledLetters.includes("i") ? "bg-gray-800" : foundLetters.includes("i") ? "bg-green-700" : "bg-gray-500"} py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("i")}
    >
      I
    </button>
    <button
      class="{disabledLetters.includes("o") ? "bg-gray-800" : foundLetters.includes("o") ? "bg-green-700" : "bg-gray-500"} py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("o")}
    >
      O
    </button>
    <button
      class="{disabledLetters.includes("p") ? "bg-gray-800" : foundLetters.includes("p") ? "bg-green-700" : "bg-gray-500"} py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("p")}
    >
      P
    </button>
  </div>
  <div class="flex gap-2">
    <div class="basis-5 text-center rounded-md" />
    <button
      class="{disabledLetters.includes("a") ? "bg-gray-800" : foundLetters.includes("a") ? "bg-green-700" : "bg-gray-500"} py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("a")}
    >
      A
    </button>
    <button
      class="{disabledLetters.includes("s") ? "bg-gray-800" : foundLetters.includes("s") ? "bg-green-700" : "bg-gray-500"} py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("s")}
    >
      S
    </button>
    <button
      class="{disabledLetters.includes("d") ? "bg-gray-800" : foundLetters.includes("d") ? "bg-green-700" : "bg-gray-500"} py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("d")}
    >
      D
    </button>
    <button
      class="{disabledLetters.includes("f") ? "bg-gray-800" : foundLetters.includes("f") ? "bg-green-700" : "bg-gray-500"} py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("f")}
    >
      F
    </button>
    <button
      class="{disabledLetters.includes("g") ? "bg-gray-800" : foundLetters.includes("g") ? "bg-green-700" : "bg-gray-500"} py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("g")}
    >
      G
    </button>
    <button
      class="{disabledLetters.includes("h") ? "bg-gray-800" : foundLetters.includes("h") ? "bg-green-700" : "bg-gray-500"} py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("h")}
    >
      H
    </button>
    <button
      class="{disabledLetters.includes("j") ? "bg-gray-800" : foundLetters.includes("j") ? "bg-green-700" : "bg-gray-500"} py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("j")}
    >
      J
    </button>
    <button
      class="{disabledLetters.includes("k") ? "bg-gray-800" : foundLetters.includes("k") ? "bg-green-700" : "bg-gray-500"} py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("k")}
    >
      K
    </button>
    <button
      class="{disabledLetters.includes("l") ? "bg-gray-800" : foundLetters.includes("l") ? "bg-green-700" : "bg-gray-500"} py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("l")}
    >
      L
    </button>
    <div class="basis-5 text-center rounded-md" />
  </div>
  <div class="flex gap-2">
    <button
      class="bg-gray-500 py-3 basis-0 grow-[2] text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("enter")}
    >
      Enter!
    </button>
    <button
      class="{disabledLetters.includes("z") ? "bg-gray-800" : foundLetters.includes("z") ? "bg-green-700" : "bg-gray-500"} py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("z")}
    >
      Z
    </button>
    <button
      class="{disabledLetters.includes("x") ? "bg-gray-800" : foundLetters.includes("x") ? "bg-green-700" : "bg-gray-500"} py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("x")}
    >
      X
    </button>
    <button
      class="{disabledLetters.includes("c") ? "bg-gray-800" : foundLetters.includes("c") ? "bg-green-700" : "bg-gray-500"} py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("c")}
    >
      C
    </button>
    <button
      class="{disabledLetters.includes("v") ? "bg-gray-800" : foundLetters.includes("v") ? "bg-green-700" : "bg-gray-500"} py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("v")}
    >
      V
    </button>
    <button
      class="{disabledLetters.includes("b") ? "bg-gray-800" : foundLetters.includes("b") ? "bg-green-700" : "bg-gray-500"} py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("b")}
    >
      B
    </button>
    <button
      class="{disabledLetters.includes("n") ? "bg-gray-800" : foundLetters.includes("n") ? "bg-green-700" : "bg-gray-500"} py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("n")}
    >
      N
    </button>
    <button
      class="{disabledLetters.includes("m") ? "bg-gray-800" : foundLetters.includes("m") ? "bg-green-700" : "bg-gray-500"} py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("m")}
    >
      M
    </button>
    <button
      class="bg-gray-500 py-3 basis-0 grow-[2] text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("backspace")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        class="fill-gray-200 mx-auto"
      >
        <path
          d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"
        />
      </svg>
    </button>
  </div>
</div>
