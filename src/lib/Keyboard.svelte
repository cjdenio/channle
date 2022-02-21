<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function dispatchKeyPress(key: string) {
    dispatch("keypress", {
      key,
    });
  }
</script>

<div class="max-w-xl w-full flex gap-2 flex-col items-stretch mb-10">
  <div class="flex gap-2">
    <div
      class="bg-gray-500 py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("q")}
    >
      Q
    </div>
    <div
      class="bg-gray-500 py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("w")}
    >
      W
    </div>
    <div
      class="bg-gray-500 py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("e")}
    >
      E
    </div>
    <div
      class="bg-gray-500 py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("r")}
    >
      R
    </div>
    <div
      class="bg-gray-500 py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("t")}
    >
      T
    </div>
    <div
      class="bg-gray-500 py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("y")}
    >
      Y
    </div>
    <div
      class="bg-gray-500 py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("u")}
    >
      U
    </div>
    <div
      class="bg-gray-500 py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("i")}
    >
      I
    </div>
    <div
      class="bg-gray-500 py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("o")}
    >
      O
    </div>
    <div
      class="bg-gray-500 py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("p")}
    >
      P
    </div>
  </div>
  <div class="flex gap-2">
    <div class="basis-5 text-center rounded-md" />
    <div
      class="bg-gray-500 py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("a")}
    >
      A
    </div>
    <div
      class="bg-gray-500 py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("s")}
    >
      S
    </div>
    <div
      class="bg-gray-500 py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("d")}
    >
      D
    </div>
    <div
      class="bg-gray-500 py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("f")}
    >
      F
    </div>
    <div
      class="bg-gray-500 py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("g")}
    >
      G
    </div>
    <div
      class="bg-gray-500 py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("h")}
    >
      H
    </div>
    <div
      class="bg-gray-500 py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("j")}
    >
      J
    </div>
    <div
      class="bg-gray-500 py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("k")}
    >
      K
    </div>
    <div
      class="bg-gray-500 py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("l")}
    >
      L
    </div>
    <div class="basis-5 text-center rounded-md" />
  </div>
  <div class="flex gap-2">
    <div
      class="bg-gray-500 py-3 basis-0 grow-[2] text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("enter")}
    >
      Enter!
    </div>
    <div
      class="bg-gray-500 py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("z")}
    >
      Z
    </div>
    <div
      class="bg-gray-500 py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("x")}
    >
      X
    </div>
    <div
      class="bg-gray-500 py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("c")}
    >
      C
    </div>
    <div
      class="bg-gray-500 py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("v")}
    >
      V
    </div>
    <div
      class="bg-gray-500 py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("b")}
    >
      B
    </div>
    <div
      class="bg-gray-500 py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("n")}
    >
      N
    </div>
    <div
      class="bg-gray-500 py-3 basis-0 grow text-center rounded-md cursor-pointer select-none"
      on:click={() => dispatchKeyPress("m")}
    >
      M
    </div>
    <div
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
    </div>
  </div>
</div>
