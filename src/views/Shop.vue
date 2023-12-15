<template>
  <div
    class="mb-20 mt-10 flex items-center justify-center bg-[#FFFFFF] px-10 text-[#181028]"
  >
    <div class="m-10 grid grid-cols-4 gap-5">
      <div class="flex w-full flex-col gap-5">
        <h1 class="text-xl font-bold">Filters</h1>
        <div class="mb-3 font-semibold">
          <h1 class="mb-2">Category</h1>
          <div class="">
            <label for="catCookies" class="flex flex-row gap-3">
              <input
                id="catCookies"
                class="category"
                type="checkbox"
                value="cookies"
              />
              <p>Cookies</p>
            </label>
            <label for="catCandles" class="flex flex-row gap-3">
              <input
                id="catCandles"
                class="category"
                type="checkbox"
                value="candles"
              />
              <p>Candles</p>
            </label>
            <label for="catOrnaments" class="flex flex-row gap-3">
              <input
                id="catOrnaments"
                class="category"
                type="checkbox"
                value="ornaments"
              />
              <p>Ornaments</p>
            </label>
            <label for="catAccessories" class="flex flex-row gap-3">
              <input
                id="catAccessories"
                class="category"
                type="checkbox"
                value="accessories"
              />
              <p>Accessories</p>
            </label>
          </div>
        </div>
        <div class="mb-3 font-semibold">
          <h1 class="mb-2">Colors</h1>
          <div class="">
            <label for="colRed" class="flex flex-row gap-3">
              <input id="colRed" class="color" type="checkbox" value="red" />
              <p>Red</p>
            </label>
            <label for="colWhite" class="flex flex-row gap-3">
              <input
                id="colWhite"
                class="color"
                type="checkbox"
                value="white"
              />
              <p>White</p>
            </label>
            <label for="colGreen" class="flex flex-row gap-3">
              <input
                id="colGreen"
                class="color"
                type="checkbox"
                value="green"
              />
              <p>Green</p>
            </label>
            <label for="colBrown" class="flex flex-row gap-3">
              <input
                id="colBrown"
                class="color"
                type="checkbox"
                value="brown"
              />
              <p>Brown</p>
            </label>
          </div>
        </div>
        <div class="mb-3 font-semibold">
          <h1 class="mb-2">Size</h1>
          <div class="">
            <label for="sizeSm" class="flex flex-row gap-3">
              <input id="sizeSm" class="size" type="checkbox" value="small" />
              <p>Small</p>
            </label>
            <label for="sizeMd" class="flex flex-row gap-3">
              <input id="sizeMd" class="size" type="checkbox" value="medium" />
              <p>Medium</p>
            </label>
            <label for="sizeLg" class="flex flex-row gap-3">
              <input id="sizeLg" class="size" type="checkbox" value="large" />
              <p>Large</p>
            </label>
          </div>
        </div>
      </div>
      <div
        id="productContainer"
        class="col-span-3 grid w-full max-w-3xl grid-cols-1 place-items-start gap-3 bg-white text-[#181028] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <button
          type="button"
          v-for="product in storeProducts"
          class="productButton group w-full"
          data-id="${prod.id}"
        >
          <div
            :class="`relative mb-3 flex w-full flex-col items-center justify-center border-4 border-b-0 border-[#F8FAFC] bg-[#F8FAFC] pt-10 duration-300 ${
              product.discount
                ? 'group-hover:border-[#E55952]'
                : 'group-hover:border-[#227293]'
            }`"
          >
            <div
              :class="{
                'absolute left-0 top-0 px-3 py-1 uppercase text-white': true,
                'bg-[#E55952]': product.discount,
                'bg-[#227293]': product.new,
                hidden: !product.new && !product.discount,
              }"
            >
              {{
                product.discount ? product.discount : product.new ? "NEW" : ""
              }}
            </div>
            <div class="flex h-32 items-center justify-center">
              <img :src="String(product.url)" :alt="product.name" />
            </div>
            <div
              :class="{
                'w-full border-b-4 duration-300': true,
                'added border-[#CEE6FC] bg-[#CEE6FC] text-black': product.added,
                'group-hover:border-[#E55952]': product.discount,
                'bg-[#E55952]': product.discount && !product.added,
                'group-hover:border-[#227293]': !product.discount,
                'bg-[#227293]': !product.discount && !product.added,
                'border-[#F8FAFC] text-white opacity-0 group-hover:opacity-100':
                  !product.added,
                'mx-[4px] flex items-center justify-center gap-2 pb-1 pt-2 font-semibold': true,
              }"
            >
              {{ product.added ? "Added to Cart" : `Add to Cart ` }}
              <i v-if="product.added" class="fa-solid fa-gifts"></i>
            </div>
          </div>
          <div class="space-y-1">
            <p class="text-sm font-semibold">{{ product.name }}</p>
            <p class="text-xl font-semibold">
              ${{ product.discount ? product.discountPrice : product.price }}
              <span
                v-if="product.discount"
                class="text-sm text-zinc-500 line-through"
                >${{ product.price }}</span
              >
            </p>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { products } from "../assets/products.ts";

type Product = (typeof products)[number] & {
  added: boolean;
};

const storeProducts = computed(() => {
  // Get the first 3 products as featured products
  const storeProds = products.map((product) => ({ ...product, added: false }));
  storeProds[0].added = true;
  return storeProds;
});

const activeProduct = ref<Product | null>(null);

const setActiveProduct = (clickedProduct: Product) => {
  storeProducts.value.forEach((product) => {
    product.added = product === clickedProduct;
  });

  activeProduct.value = clickedProduct;
};

onMounted(() => {
  if (storeProducts.value.length > 0) {
    setActiveProduct(storeProducts.value[0]);
  }
});
</script>
