import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const Layout = () => import("@/layout/Layout.vue");
const Login = () => import("@/views/Login.vue");
const Home = () => import("@/views/Home.vue");
const Page1 = () => import("@/views/Page1.vue");
const Page2 = () => import("@/views/Page2.vue");
const NotFound = () => import("@/views/404.vue");

export const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        meta: {
          title: "首页",
        },
        component: Home,
      },
      {
        path: "/page",
        meta: {
          title: "页面",
        },
        children: [
          {
            path: "/page/subpage1",
            meta: {
              title: "页面1",
            },
            component: Page1,
          },
          {
            path: "/page/subpage2",
            meta: {
              title: "页面2",
            },
            component: Page2,
          },
        ],
      },
    ],
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
