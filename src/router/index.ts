import { createRouter, RouteRecordRaw, createWebHashHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "",
    component: () => import("@/views/Home.vue"), // 注意这里要带上 文件后缀.vue
    props: true,
    children: [
      {
        path: "person",
        name: 'person',
        meta: {
          title: "个人简历"
        },
        component: () => import('@/views/person/index.vue')
      },
      {
        path: "text",
        name: 'text',
        meta: {
          title: "学习笔记"
        },
        component: () => import('@/views/text/index.vue')
      },
      {
        path: "game",
        name: 'game',
        meta: {
          title: "游戏日志"
        },
        component: () => import('@/views/game/index.vue')
      },
      {
        path: "time",
        name: 'time',
        component: () => import('@/views/time/index.vue'),
        meta: {
          title: "小站时间线"
        },
      },
      {
        path: "home",
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: "导航页"
        },
      },
      {
        path: "/",
        redirect: "/time"
      },
    ]
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/system/404.vue"), // 注意这里要带上 文件后缀.vue
  },
  // 匹配无效的路径重定向404
  {
    path: "/:pathMatch(.*)*",
    redirect: { name: "404" },
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
