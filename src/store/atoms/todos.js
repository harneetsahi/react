import { atomFamily, selector, selectorFamily } from "recoil";
import axios from "axios";
import { todos } from "../todosList.js";

export const todosAtomFamily = atomFamily({
  key: "todosAtomFamily",

  //// to fetch data from local memory
  // default: (id) => {
  //   return todos.find((x) => x.id === id);
  // },

  //// to get data from backend for atom family
  default: selectorFamily({
    key: "todoSelectorFamily",
    get:
      (id) =>
      async ({ get }) => {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/todos/${id}`
        );
        return res.data;
      },
  }),
});
