<template>
  <header class="">
    <div
      id="discountBanner"
      class="flex max-h-0 w-full items-center justify-center overflow-hidden bg-red-100 transition-[max-height] duration-500"
    >
      <div
        class="flex w-full max-w-6xl flex-row items-center justify-between px-5 py-3"
      >
        <div></div>
        <div class="font-semibold">
          Use code "XMAS" for a 20% discount at checkout.
        </div>
        <button
          id="closeDiscountBanner"
          type="button"
          class="aspect-square rounded-full px-3 py-1 duration-300 hover:bg-red-200"
        >
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
    <div
      class="relative z-10 flex w-full items-center justify-center bg-white shadow-md"
    >
      <div
        class="flex w-full flex-col flex-wrap items-center justify-between gap-5 px-5 py-3 md:flex-row"
      >
        <div
          class="flex w-fit flex-row items-center justify-between gap-3 gap-y-0 sm:flex-none sm:justify-start"
        >
          <router-link :to="{ name: 'home' }"
            ><button
              type="button"
              class="rounded-full px-3 py-2 text-xl font-semibold duration-300 hover:bg-zinc-200"
            >
              iCodeMas
            </button></router-link
          >
          <label
            for="search"
            class="flex flex-row items-center gap-2 rounded-full bg-zinc-200 px-3 py-1"
          >
            <i class="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Search"
              class="w-full border-none bg-zinc-200 py-1 focus:outline-none focus:ring-0"
            />
          </label>
        </div>
        <div
          class="flex w-fit flex-row items-center justify-between gap-5 sm:justify-end"
        >
          <router-link :to="{ name: 'featured' }">
            <button
              type="button"
              class="group flex flex-col items-center justify-center font-semibold"
            >
              Featured
              <div
                class="h-[1px] w-0 bg-zinc-500 duration-300 group-hover:w-full"
              ></div>
            </button>
          </router-link>
          <router-link :to="{ name: 'shop' }"
            ><button
              type="button"
              class="group flex flex-col items-center justify-center font-semibold"
            >
              Shop
              <div
                class="h-[1px] w-0 bg-zinc-500 duration-300 group-hover:w-full"
              ></div></button
          ></router-link>
          <router-link to="/"
            ><button
              type="button"
              class="group flex flex-col items-center justify-center font-semibold"
            >
              FAQ
              <div
                class="h-[1px] w-0 bg-zinc-500 duration-300 group-hover:w-full"
              ></div></button
          ></router-link>
          <router-link to="/"
            ><button
              id="cartBtn"
              type="button"
              class="group relative mx-3 flex flex-col items-center justify-center text-xl font-semibold"
            >
              <div
                class="absolute -right-3 -top-3 z-10 flex aspect-square w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white"
              >
                3
              </div>
              <i
                class="fa-solid fa-person-walking-luggage fa-bounce"
              ></i></button
          ></router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>
