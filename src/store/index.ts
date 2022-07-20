import { defineStore } from "pinia";

export const useStore = defineStore("global", {
  state: () => ({
    token: "this is a token",
    userName: "admin",
  }),
  getters: {
    getToken(state) {
      return state.token;
    },
  },
  actions: {
    updateToken(newToken: string) {
      this.token = newToken;
    },
  },
});
