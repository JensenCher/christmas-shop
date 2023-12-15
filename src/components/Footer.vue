<template>
  <footer
    class="relative flex w-auto items-center justify-center overflow-hidden bg-[url('/images/iCodeMas/footer_bg.png')] bg-cover bg-center"
  >
    <div
      class="relative flex w-full items-center justify-center overflow-hidden bg-gradient-to-b from-white via-transparent via-50% to-transparent"
    >
      <img
        src="/images/iCodeMas/trees.png"
        alt="trees"
        class="absolute bottom-0 right-0 w-[8rem]"
      />
      <div class="relative max-w-7xl px-8 py-16">
        <div
          class="relative grid grid-cols-1 gap-10 text-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          <div class="flex flex-col items-start justify-between gap-16">
            <div class="flex flex-col items-start justify-start gap-5">
              <h1 class="text-xl font-bold">iCodeMas</h1>
              <p class="max-w-[15rem] text-xs">
                At iCodemas, we believe in spreading joy, creating memoris, and
                making every moment magical.<br />
                Embrace the spirit of iCodeMas and make your holidays merry and
                bright!
              </p>
            </div>
            <div class="text-xs text-zinc-300">
              &copy;2023 iCodeThis. All Rights Reserved.
            </div>
          </div>
          <div class="flex flex-col items-start justify-start gap-5">
            <h1 class="text-xl font-bold">Products</h1>
            <ul class="flex flex-col items-start justify-start gap-3">
              <li
                class="cursor-pointer list-none font-semibold text-zinc-400 duration-500 hover:text-white"
              >
                Cookies
              </li>
              <li
                class="cursor-pointer list-none font-semibold text-zinc-400 duration-500 hover:text-white"
              >
                Candles
              </li>
              <li
                class="cursor-pointer list-none font-semibold text-zinc-400 duration-500 hover:text-white"
              >
                Ornaments
              </li>
              <li
                class="cursor-pointer list-none font-semibold text-zinc-400 duration-500 hover:text-white"
              >
                Accessories
              </li>
            </ul>
          </div>
          <div class="flex flex-col items-start justify-start gap-5">
            <h1 class="text-xl font-bold">Client</h1>
            <ul class="flex flex-col items-start justify-start gap-3">
              <li
                class="cursor-pointer list-none font-semibold text-zinc-400 duration-500 hover:text-white"
              >
                Find a store
              </li>
              <li
                class="cursor-pointer list-none font-semibold text-zinc-400 duration-500 hover:text-white"
              >
                Newsletter
              </li>
              <li
                class="cursor-pointer list-none font-semibold text-zinc-400 duration-500 hover:text-white"
              >
                Cookies Policy
              </li>
            </ul>
          </div>
          <div class="flex flex-col items-start justify-start gap-5">
            <h1 class="text-xl font-bold">About</h1>
            <ul class="flex flex-col items-start justify-start gap-3">
              <li
                class="cursor-pointer list-none font-semibold text-zinc-400 duration-500 hover:text-white"
              >
                Find a store
              </li>
              <li
                class="cursor-pointer list-none font-semibold text-zinc-400 duration-500 hover:text-white"
              >
                Return policy
              </li>
              <li
                class="cursor-pointer list-none font-semibold text-zinc-400 duration-500 hover:text-white"
              >
                Contact
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>
