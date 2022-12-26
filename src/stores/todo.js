import { defineStore } from "pinia";

export const useTodoStore = defineStore("counter", {
  state: () => ({
    list: [
      { id: 1, text: "First", done: false },
      { id: 2, text: "First", done: true },
      { id: 3, text: "First", done: false },
    ],
  }),
  getters: {
    getCounter: (state) => state.list.length,
  },
  actions: {
    addItem(itemText) {
      const text = itemText.trim();
      if (text) {
        this.list.push({ id: this.getCounter, text: itemText, done: false });
      }
    },
    removeItem(item) {
      this.list.splice(this.list.indexOf(item), 1);
    },
    toggleItem(idItem) {
      let item = this.list.find((el) => el.id === idItem);
      if (item) item.done = !item.done;
    },
  },
});
