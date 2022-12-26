<template>
  <main>
    <div class="header">{{ title }}</div>
    <form class="form-control" @submit.prevent="handleSubmit">
      <input type="text" v-model="text" id="todo" placeholder="nova tarefa" />
      <button>add</button>
    </form>

    <div class="todos-container">
      <div v-for="item in list" :key="item.id">
        <input
          type="checkbox"
          :checked="item.done"
          @input="toggleItem(item.id)"
        />
        <span :class="{ 'is-done': item.done }">{{ item.text }}</span>
        <button @click="removeItem(item)">❌</button>
      </div>
    </div>
    <span>Total itens: {{ getCounter }}</span>
  </main>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useTodoStore } from "./stores/todo";

export default {
  name: "App",
  created() {
    this.title = "TODO LIST";
  },
  data() {
    return {
      title: "",
      text: "",
    };
  },
  computed: {
    ...mapState(useTodoStore, ["list", "getCounter"]),
  },
  methods: {
    ...mapActions(useTodoStore, ["addItem", "removeItem", "toggleItem"]),
    handleSubmit() {
      this.addItem(this.text);
      this.text = "";
    },
  },
};
</script>

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
