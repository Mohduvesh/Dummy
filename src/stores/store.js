import { createStore } from "vuex";
export default createStore({
  state: {
    num1: "",
    num2: "",
    sum: 0,
  },
  getters: {},
  mutations: {
    addNum(state, payload) {
      state.sum = payload.num1 + payload.num2;
    },
  },
  actions: {
    addNum(context, payload) {
      context.commit("addNum");
    },
  },
});
