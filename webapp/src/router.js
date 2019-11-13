import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Dashboard from "./views/Dashboard.vue";
import Staff from "./views/Staff.vue"
import ToDos from "./views/ToDos.vue";
import PastOrders from "./views/PastOrders.vue";
import Shop from "./views/Shop.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {

      path: "/todos",
      name: "todos",
      component: ToDos
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/manage/staff",
      name: "staff",
      component: Staff
    },
    {
      path: "/Shop",
      name: "Shop",
      component: Shop
    },
    {
      path: "/manage/orders",
      name: "orders",
      component: PastOrders
    },
    {
      path: "/myaccount",
      name: "myaccount",
      component: () =>
        import("./views/CAccount.vue")
    }
  ]
});
