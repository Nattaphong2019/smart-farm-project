import Vue from "vue";
import Router from "vue-router";

// Containers
const DefaultContainer = () => import("@/containers/DefaultContainer");

// Views
const Home = () => import("@/views/Home");
const Dashboard = () => import("@/views/Dashboard");
const History = () => import("@/views/History");

Vue.use(Router);

function configRoutes() {
  return [
    {
      path: "/",
      redirect: "/home",
      name: "Home",
      component: DefaultContainer,
      children: [
        {
          path: "home",
          component: Home
        },
        {
          path: "dashboard",
          name: "Dashboard",
          component: Dashboard
        },
        {
          path: "history",
          name: "History",
          component: History
        },
      ]
    }
  ];
}

export default new Router({
  mode: "hash", // https://router.vuejs.org/api/#mode
  linkActiveClass: "open active",
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
});
