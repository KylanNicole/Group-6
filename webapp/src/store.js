import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
Vue.use(Vuex);

export const mutations = {
  login: function(state, user) {
    state.loginState = { ...state.loginState, loggedIn: true, user: user.data };
  },
  logout: function(state) {
    state.loginState = { ...state.loginState, loggedIn: false };
  },
  addToDo(state, todo) {
    state.todoIdx = state.todoIdx + 1;
    state.todos = [...state.todos, { ...todo, done: false, id: state.todoIdx }];
  },
  updateToDo(state, todo) {
    state.todos = state.todos.map(td => (td.id === todo.id ? todo : td));
  },
  deleteToDo(state, todo) {
    state.todos = state.todos.filter(td => td.id !== todo.id);
  },
  todosLoaded(state, todos) {
    state.todos = todos;
  },
  storeItems(state, items) {
    state.spices = items;
  },
  storeTags(state, tags) {
    state.tags = tags;
  },
  updateSpice(state, spice) {
    state.spices = state.spices.map(s => (s.id === spice.id ? spice : s));
  },
  deleteSpice(state, spice) {
    state.spices = state.spices.filter(s => s.id !== spice.id);
  },
  createSpice(state, spice) {
    state.spices = [...state.spices, { ...spice}];
  }
};

export const actions = {
  login: function({ commit }, payload) {
    const { email, password } = payload;
    return axios.post("/api/login", { email, password }).then((response) => {
      commit("login", response);
      // return dispatch("loadTodos");
    });
  },
  logout: function({ commit }) {
    return axios.get("/api/logout").then(() => {
      commit("logout");
    });
  },
  signup: function({commit}, payload){
    const {firstname, lastname, email, password} = payload;
    return axios.post("/api/signup", {firstname, lastname, email, password}).then((response) => {
      commit("login", response);
    })
  },
  getItems: function({commit}, payload){
    return axios.get("/api/item", payload).then((response) => {
      commit("storeItems", response.data);
    })
  },
  addToDo({ commit }, toDo) {
    return axios.post("/api/todos", toDo).then(response => {
      commit("addToDo", response.data);
    });
  },
  addBanner({commit}, banner) {
    console.log(banner);
    return axios.post("/api/announcement", banner);
  },
  updateTodo({ commit }, toDo) {
    return axios.put(`/api/todos/${toDo.id}`, toDo).then(response => {
      commit("updateToDo", response.data);
    });
  },
  deleteTodo({ commit }, toDo) {
    return axios.delete(`/api/todos/${toDo.id}`).then(() => {
      commit("deleteToDo", toDo);
    });
  },
  loadToDos({ commit }) {
    return axios.get("/api/todos").then(response => {
      commit("todosLoaded", response.data);
    });
  },
  checkLoggedIn({ commit }) {
    return axios.get("/api/checkLogin").then(() => {
      commit("login");
    });
  },
  getTags:function({commit}, payload) {
    return axios.get("/api/tag", payload).then(response => {
      commit("storeTags", response.data);
    });
  },
  createSpice:function({commit}, payload) {
    return axios.post("/api/item", payload).then(() => {
      commit("createSpice", payload);
    })
  },
  updateSpice:function({commit}, payload) {
    return axios.put(`/api/item/${payload.id}`, payload).then(() => {
      commit("updateSpice", payload);
    })
  },
  deleteSpice:function({commit}, payload) {
    return axios.delete(`/api/item/${payload.id}`, payload).then(() => {
      commit("deleteSpice", payload);
    })
  }
};

export default new Vuex.Store({
  state: {
    todos: [],
    loginState: {
      loggedIn: false,
      user: {}
    },
    todoIdx: 0,
    spices: [],
    orders: [],
    tags: [],
  },
  mutations,
  actions
});
