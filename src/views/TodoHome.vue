<template>
  <main class="flex flex-col items-center justify-center gap-5 mx-5">
    <section class="greeting">
      <h2 class="text-xl font-bold">What're you up to, <input type="text" placeholder="Name here" v-model="name" class="px-3 py-2 rounded-md mx-2" />?</h2>
    </section>
    <section class="flex flex-col items-start justify-start max-w-md w-full">
      <h3 class="text-lg font-semibold mb-3">Create a todo</h3>
      <form @submit.prevent="addTodo" class="flex flex-col gap-1 items-start">
        <h4 class="">What's on your todo list?</h4>
        <input type="text" placeholder="Eg. Make a pancake..." v-model="input_content" class="px-3 py-2 rounded-md mb-3" />
        <h4>Pick a category</h4>
        <div class="grid grid-cols-2 gap-3 place-items-center w-full mb-3">
          <label class="px-8 py-4 bg-white rounded-md text-black flex flex-col items-center gap-1 text-sm font-semibold"
            ><input type="radio" name="category" id="category1" value="business" v-model="input_category" />
            <span class="bubble business"></span>
            <div>Business</div></label
          >
          <label class="px-8 py-4 bg-white rounded-md text-black flex flex-col items-center gap-1 text-sm font-semibold"
            ><input type="radio" name="category" id="category1" value="personal" v-model="input_category" />
            <span class="bubble personal"></span>
            <div>Personal</div></label
          >
        </div>
        <input
          type="submit"
          value="Add Todo"
          class="w-full bg-pink-500 hover:bg-pink-400 hover:scale-105 active:scale-100 duration-300 cursor-pointer font-semibold rounded-md px-5 py-3"
        />
      </form>
    </section>
    <section class="flex flex-col items-start justify-start max-w-md w-full">
      <h3 class="text-lg font-semibold mb-3">Todo List</h3>
      <div class="list w-full space-y-2 text-white">
        <div
          v-for="todo in todos_asc"
          :class="`flex flex-row items-center gap-3 px-5 py-3 w-full rounded-md bg-gradient-to-r ${todo.category === 'business' ? 'from-blue-500' : 'from-pink-500'} to-white`"
        >
          <label>
            <input type="checkbox" v-model="todo.done" />
            <span :class="`bubble ${todo.category}`"></span>
          </label>
          <div class="">
            <input type="text" v-model="todo.content" :class="`bg-transparent font-semibold ${todo.done && 'line-through focus:outline-none'}`" :readonly="todo.done" />
          </div>
          <div class="flex items-center justify-end w-full">
            <button type="button" @click="removeTodo(todo)" class="px-2 py-1 rounded-md bg-orange-400 text-xs hover:bg-orange-500 duration-300 text-white">Delete</button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style></style>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from "vue";

interface TodoProps {
  content: string;
  category: string | null;
  done: boolean;
  createdAt: number;
}

const todos = ref<TodoProps[]>([]);
const name = ref("");
const input_content = ref("");
const input_category = ref(null);

const todos_asc = computed(() =>
  todos.value.sort((a, b) => {
    return b.createdAt - a.createdAt;
  })
);

const addTodo = () => {
  if (input_content.value.trim() === "" || input_category.value === null) {
    return;
  }

  todos.value.push({
    content: input_content.value,
    category: input_category.value,
    done: false,
    createdAt: new Date().getTime(),
  });

  input_content.value = "";
  input_category.value = null;
};

const removeTodo = (todo: TodoProps) => {
  todos.value = todos.value.filter((t) => t !== todo);
};

watch(
  todos,
  (newVal) => {
    localStorage.setItem("todos", JSON.stringify(newVal));
  },
  {
    deep: true,
  }
);

watch(name, (newVal) => {
  localStorage.setItem("name", newVal);
});

onMounted(() => {
  name.value = localStorage.getItem("name") || "";
  todos.value = JSON.parse(localStorage.getItem("todos") as string) || [];
});
</script>
