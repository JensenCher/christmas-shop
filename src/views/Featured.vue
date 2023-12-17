<template>
  <Container>
    <div
      class="flex w-full items-start justify-center bg-neutral-50 text-[#181028]"
    >
      <div class="flex max-w-3xl flex-col items-center justify-center p-8">
        <h1 class="pb-3 text-3xl font-bold">Featured Products</h1>
        <p class="px-10 text-center text-sm">
          Discover the magic of the season with our handpicked Featured
          Products.
        </p>
        <p class="px-10 text-center text-sm">
          From enchanting decorations to delightful gifts, these curated items
          are sure to add touch of joy to our festive celebrations.
        </p>
        <div class="flex flex-row items-center justify-center gap-3 py-10">
          <button
            v-for="product in featuredProducts"
            :key="product.id"
            type="button"
            :class="{
              'relative border-4 p-3': true,
              'border-[#E45953]': product.active && product.discount,
              'border-[#227293]': product.active && !product.discount,
              'hover:border-[#E45953]': !product.active && product.discount,
              'hover:border-[#227293]': !product.active && !product.discount,
              'over flex aspect-square w-40 items-center justify-center rounded-md bg-white duration-300': true,
            }"
            @click="setActiveProduct(product)"
          >
            <div
              v-if="product.new"
              class="absolute -left-1 -top-[0.15rem] rounded-tl-md bg-[#227293] px-2 py-1 text-white"
            >
              NEW
            </div>
            <div
              v-else-if="product.discount"
              class="absolute -left-1 -top-[0.15rem] rounded-tl-md bg-[#E45953] px-2 py-1 text-white"
            >
              {{ product.discount }}
            </div>
            <img :src="String(product.url)" :alt="product.name" />
          </button>
        </div>
        <div
          class="grid grid-cols-1 place-items-center gap-3 px-10 md:grid-cols-2"
        >
          <div
            class="relative flex aspect-square w-72 items-center justify-center overflow-hidden rounded-md bg-white p-3"
          >
            <div
              v-if="activeProduct?.new"
              id="itemTag"
              class="absolute left-0 top-0 rounded-br-md bg-[#227293] px-2 py-1 text-white"
            >
              NEW
            </div>
            <div
              v-else-if="activeProduct?.discount"
              id="itemTag"
              class="absolute left-0 top-0 rounded-br-md bg-[#E45953] px-2 py-1 text-white"
            >
              {{ activeProduct?.discount }}
            </div>
            <img
              id="itemImg"
              :src="activeProduct?.url as string"
              :alt="activeProduct?.name"
            />
          </div>
          <div class="flex h-full w-full flex-col justify-between gap-3 px-10">
            <div class="space-y-3">
              <h1 id="itemName" class="font-semibold">
                {{ activeProduct?.name }}
              </h1>
              <h2 id="itemPrice" class="text-lg font-bold">
                ${{ activeProduct?.price }}
              </h2>
              <div id="itemStars" class="flex flex-row gap-3">
                <i
                  v-for="star in activeProduct?.stars"
                  :key="star"
                  class="fa-solid fa-star text-[#FFCA67]"
                ></i>
                <span v-if="activeProduct?.stars">
                  <span
                    v-for="emptyStar in 5 - activeProduct?.stars"
                    :key="emptyStar"
                    class="flex flex-row gap-3"
                  >
                    <i
                      v-for="star in emptyStar"
                      :key="star"
                      class="fa-regular fa-star text-[#FFCA67]"
                    ></i>
                  </span>
                </span>
              </div>
              <div id="itemDesc" class="text-sm text-zinc-600">
                {{ activeProduct?.description }}
              </div>
            </div>
            <div>
              <button
                type="button"
                class="rounded-md bg-[#227293] px-3 py-2 text-white filter duration-300 hover:-translate-y-2 hover:brightness-110"
              >
                Add to cart <i class="fa-solid fa-cable-car"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
  import { computed, onMounted, ref } from "vue";
  import { products } from "../assets/products.ts";
  import Container from "../components/Container.vue";

  type Product = (typeof products)[number] & {
    active: boolean;
  };

  const featuredProducts = computed(() => {
    // Get the first 3 products as featured products
    const featProds = products
      .slice(0, 3)
      .map((product) => ({ ...product, active: false }));
    featProds[0].active = true;
    return featProds;
  });

  const activeProduct = ref<Product | null>(null);

  const setActiveProduct = (clickedProduct: Product) => {
    featuredProducts.value.forEach((product) => {
      product.active = product === clickedProduct;
    });

    activeProduct.value = clickedProduct;
  };

  onMounted(() => {
    if (featuredProducts.value.length > 0) {
      setActiveProduct(featuredProducts.value[0]);
    }
  });
</script>
