import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useTodoStore = defineStore("counter", () => {
  const list = ref([
    { id: 1, text: "First", done: false },
    { id: 2, text: "First", done: true },
    { id: 3, text: "First", done: false },
  ]);

  const getCounter = computed(() => list.value.length);

  function addItem(itemText) {
    const text = itemText.trim();
    if (text) {
      list.value.push({ id: getCounter, text: itemText, done: false });
    }
  }

  function removeItem(item) {
    list.value.splice(list.value.indexOf(item), 1);
  }

  function toggleItem(idItem) {
    let item = list.value.find((el) => el.id === idItem);
    if (item) item.done = !item.done;
  }

  return { list, getCounter, addItem, removeItem, toggleItem };
});
