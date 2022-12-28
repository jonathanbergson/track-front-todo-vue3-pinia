<script setup>
import { ref } from "vue";
import { useTodoStore } from "./stores/todo";

const title = "TODO LIST - FRONTEND";
const text = ref("");

const store = useTodoStore();

function handleSubmit() {
  store.addItem(text.value);
  text.value = "";
}
</script>

<template>
  <main>
    <div class="header">{{ title }}</div>
    <form class="form-control" @submit.prevent="handleSubmit">
      <input type="text" v-model="text" id="todo" placeholder="nova tarefa" />
      <button>add</button>
    </form>

    <div class="todos-container">
      <div v-for="item in store.list" :key="item.id">
        <input
          type="checkbox"
          :checked="item.done"
          @input="store.toggleItem(item.id)"
        />
        <span :class="{ 'is-done': item.done }">{{ item.text }}</span>
        <button @click="store.removeItem(item)">❌</button>
      </div>
    </div>
    <span>Total itens: {{ store.getCounter }}</span>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 100vh;
  width: 100%;
}

.form-control {
  display: flex;
  flex-direction: column;
}

.is-done {
  text-decoration: line-through;
}
</style>
