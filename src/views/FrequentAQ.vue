<template>
  <Container>
    <div
      class="my-10 flex w-full max-w-3xl flex-col items-center justify-center"
    >
      <h1
        class="mx-10 mb-12 max-w-[20ch] text-center text-2xl font-bold xs:text-4xl"
      >
        Frequently Asked Questions
      </h1>

      <div class="accordion mx-10 overflow-hidden">
        <!-- [&_div:not(:last-child)]:border-b [&_div:not(:last-child)]:border-b-zinc-400 -->
        <div
          v-for="faq in faqDisplay"
          :key="faq.id"
          :class="`accordion-panel border-b ${
            faq.expanded ? 'border-b-zinc-500' : ' border-b-zinc-200'
          } duration-300 hover:border-b-zinc-500`"
        >
          <h2 id="panel1-title relative">
            <button
              class="accordion-trigger flex w-full flex-row items-center justify-between gap-3 border-0 bg-white p-4 duration-300 hover:bg-zinc-50"
              aria-expanded="true"
              aria-controls="accordion1-content"
              @click="triggerAccordion(faq)"
            >
              <span class="text-left font-semibold">{{ faq.question }}</span>
              <span
                ><i
                  :class="`fa-solid fa-chevron-down duration-500 ${
                    faq.expanded ? 'rotate-180' : 'rotate-0'
                  }`"
                ></i
              ></span>
            </button>
          </h2>
          <div
            :class="`accordion-content grid bg-zinc-100 transition-[grid-template-rows_500ms] duration-500 ${
              faq.expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
            }`"
            role="region"
            aria-labelledby="panel1-title"
            :aria-hidden="faq.expanded"
            id="panel1-content"
          >
            <div class="overflow-hidden transition duration-500">
              <p class="p-4 text-sm">
                {{ faq.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
  import Container from "../components/Container.vue";
  import { faqs } from "../assets/faq";
  import { ref } from "vue";

  const faqDisplay = ref<typeof faqs | null>(faqs);

  const triggerAccordion = (faq: (typeof faqs)[number]) => {
    faq.expanded = !faq.expanded;
  };
</script>

<style scoped></style>
