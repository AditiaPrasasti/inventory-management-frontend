import { createRouter, createWebHistory } from "vue-router";
import AdminView from "../views/AdminView.vue";
import UserView from "../views/UserView.vue";
import LoginView from "@/views/LoginView.vue";

const routes = [
  {
    path: "/admin/:component",
    name: "admin",
    component: AdminView,
    props: true,
    meta: {
      requireAuth: true,
      role: "admin",
    },
  },
  {
    path: "/user/:component",
    name: "user",
    component: UserView,
    props: true,
    meta: {
      requireAuth: true,
      role: "user",
    },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/",
    redirect: { name: "admin", params: { component: "items" } },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAunthenticated = localStorage.getItem("auth");
  const userRole = localStorage.getItem("role");

  if (to.meta.requireAuth && !isAunthenticated) {
    next({ name: "login" });
  } else if (
    to.meta.requireAuth &&
    isAunthenticated &&
    to.meta.role !== userRole
  ) {
    alert("You are not authorized to access this page");
    next(false);
  } else {
    next();
  }
});

export default router;
