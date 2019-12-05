import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "./router.js";

Vue.use(Vuex);
Vue.use(Vuex);

export const mutations = {
  login: function(state, user) {
    state.loginState = { ...state.loginState, loggedIn: true, user: user};
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
  getBanners(state, banners){
    state.banners = banners;
  },
  deleteBanner(state,banner){
    state.banners = state.banners.filter(b => b.id !== banner.id);
  },
  updateSpice(state, spice) {
    state.spices = state.spices.map(s => (s.id === spice.id ? spice : s));
  },
  deleteSpice(state, spice) {
    state.spices = state.spices.filter(s => s.id !== spice.id);
  },
  createSpice(state, spice) {
    state.spices = [...state.spices, { ...spice}];
  },
  softUpdateSpice(state, spice) {
    state.spices = state.spices.map(s => (s.id === spice.id ? spice : s));
  },
  addToCart(state, item) {
    state.cart = [...state.cart, {... item}];
  },
  deleteCartItem(state, index) {
    state.cart = state.cart.filter(item => item.index !== index);
  },
  updateCartItem(state, item) {
    state.cart = state.cart.map(i => (i.index === item.index ? item : i));
  },
  clearCart(state) {
    state.cart = [];
  },
  storeOrders(state, orders) {
    state.orders = orders;
  },
  updateOrder(state, order) {
    state.orders = state.orders.map(o => (o.id === order.id ? order : o));
  },
  storeAllOrders(state, orders) {
    state.orders = orders;
  }
};

export const actions = {
  login: function({ commit }, payload) {
    const { email, password } = payload;
    return axios.post("/api/login", { email, password }).then((response) => {
      commit("login", response.data);
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
      commit("login", response.data);
    })
  },
  getAccounts({ commit }){
    return axios.get("/api/staff").then((response) => {
      return response.data;
    })
  },
  createAlert({commit}, payload) {
    return axios.post("/api/staff_alert", payload).then((response) => {
      return response.data;
    })
  },
  getAlerts({commit}){
    return axios.get("/api/staff_alert").then((response) => {
      return response.data;
    })
  },
  updatePerm({ commit }, payload){
    return axios.put("/api/updatePerm", payload).then((response) => {
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
    return axios.post("/api/announcement", banner);
  },
  getBanners({commit}){
    return axios.get("/api/announcement").then((response) => {
      commit("getBanners", response.data);
    })
  },
  deleteBanner:function({commit}, payload) {
    return axios.delete(`/api/announcement/${payload.id}`).then(() => {
      commit("deleteBanner", payload);
    })
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
    return axios.get("/api/checkLogin").then((response) => {
      commit("login", response.data);
    }).catch((error) => {
      console.log(error);
    });
  },
  authorized({ commit }, permReq){
    axios.get("/api/checkLogin").then((response) => {
      if (response.data.permission > permReq) {
        router.push({path: "/"});
      }
    }).catch((error) => {
      if (error.response && error.response.status == 401){
        router.push({path: "/"});
      }
    })
  },
  getTags:function({commit}, payload) {
    return axios.get("/api/tag", payload).then((response) => {
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
  },
  softUpdateSpice:function({commit}, payload) {
    commit("softUpdateSpice", payload);
  },
  addToCart: function({commit}, payload) {
    commit("addToCart", payload);
  },
  updateCartItem: function({commit}, payload) {
    commit("updateCartItem", payload);
  },
  deleteCartItem: function({commit}, payload) {
    commit("deleteCartItem", payload);
  },
  sendOrder: function({commit}, payload) {
    return axios.post(`/api/cart/`, Object.assign({}, {address: payload, order_items: this.state.cart})).then(() => {
      commit("clearCart");
    })
  },
  getOrders: function({commit}) {
    return axios.get(`/api/order`).then(response => {
      commit("storeOrders", response.data);
    })
  },
  updateOrder: function({commit}, payload) {
    return axios.put(`/api/order/${payload.id}`, payload).then(response => {
      commit("updateOrder", response.data);
    })
  },
  getAllOrders: function({commit}) {
    return axios.get(`/api/order_all`).then(response => {
      commit("storeAllOrders", response.data);
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
    cart: [],
    banners: []
  },
  mutations,
  actions
});
