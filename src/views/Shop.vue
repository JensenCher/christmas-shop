<template>
  <Container>
    <div
      class="mb-20 mt-10 flex flex-col items-center justify-center gap-8 bg-[#FFFFFF] px-10 text-[#181028]"
    >
      <div class="text-center">
        <h1 class="pb-3 text-3xl font-bold">Christmas Shop</h1>
        <p class="px-10 text-center text-sm">
          Dive into the enchanting world of our Christmas shop, where festive
          wonders come to life.
        </p>
        <p class="px-10 text-center text-sm">
          Explore delightful decorations & gifts, unwrap joy and make this
          season unforgettable!
        </p>
      </div>
      <div class="m-10 grid grid-cols-3 gap-5 xl:grid-cols-4">
        <div class="col-span-3 flex w-full flex-col gap-5 xl:col-span-1">
          <h1 class="text-xl font-bold">Filters</h1>
          <div
            class="mb-3 flex flex-row flex-wrap gap-5 md:gap-10 xl:flex-col xl:gap-5"
          >
            <!-- Loop through filter categories -->
            <div
              v-for="(filterCategory, categoryIndex) in filters"
              :key="categoryIndex"
            >
              <h2 class="font-semibold">{{ filterCategory.title }}</h2>
              <!-- Loop through items in the current filter category -->
              <label
                v-for="(filterItem, itemIndex) in filterCategory.items"
                :key="itemIndex"
                :for="`${filterCategory.type}${filterItem.value}`"
                class="flex select-none flex-row items-center gap-3"
              >
                <input
                  :id="`${filterCategory.type}${filterItem.value}`"
                  class="focus:ring-0"
                  type="checkbox"
                  :value="filterItem.value"
                  v-model="selectedFilters[filterCategory.type]"
                  @change="updateFilteredProducts()"
                />
                <p>{{ filterItem.label }}</p>
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
            v-for="product in filteredProducts"
            :key="product.id"
            class="productButton group w-full"
            @click="setAddedProduct(product)"
          >
            <div class="relative mb-3 overflow-hidden rounded-md bg-[#f2f5f8]">
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
              <div
                :class="`relative flex w-full flex-col items-center justify-center border-4 border-b-0 border-[#f2f5f8] bg-[#f2f5f8] pt-10 duration-300 ${
                  product.discount
                    ? 'group-hover:border-[#E55952]'
                    : 'group-hover:border-[#227293]'
                }`"
              >
                <div class="flex h-32 items-center justify-center">
                  <img :src="String(product.url)" :alt="product.name" />
                </div>
              </div>
              <div
                :class="{
                  'relative w-full text-white duration-300': true,
                  'added border-[#CEE6FC]': product.added,
                  'bg-[#E55952] group-hover:border-[#E55952]': product.discount,
                  'bg-[#227293] group-hover:border-[#227293]':
                    !product.discount,
                  'border-[#f2f5f8] text-white opacity-0 group-hover:opacity-100':
                    !product.added,
                  'flex items-center justify-center gap-2 py-2 font-semibold': true,
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
  </Container>
</template>

<script setup lang="ts">
  import { onMounted, ref } from "vue";
  import { filters, products } from "../assets/products.ts";
  import Container from "../components/Container.vue";

  type Product = (typeof products)[number] & {
    added: boolean;
  };

  const storeProducts = ref<Product[]>([]);

  type SelectedFilters = {
    [key: string]: (string | number)[];
  };
  const selectedFilters = ref<SelectedFilters>({
    category: [],
    color: [],
    size: [],
  });

  onMounted(() => {
    storeProducts.value = products.map((product) => ({
      ...product,
      added: false,
    }));
    filteredProducts.value = storeProducts.value;
  });

  const setAddedProduct = (clickedProduct: Product) => {
    clickedProduct.added = !clickedProduct.added;
  };

  const filteredProducts = ref<Product[]>([]);
  const updateFilteredProducts = () => {
    filteredProducts.value = storeProducts.value.filter((product) => {
      return Object.keys(selectedFilters.value).every((filterType) => {
        const selectedValues = selectedFilters.value[filterType];
        return (
          selectedValues.length === 0 ||
          selectedValues.some((value) =>
            (product[filterType as keyof Product] as string[]).includes(
              value as string,
            ),
          )
        );
      });
    });
  };
</script>
