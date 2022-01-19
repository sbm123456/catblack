import { createApp } from "vue";
import App from "./App.vue";
import { setupStore } from "./store";
import router from "./router";
import { setupAssets } from "./plugins";
import { useTitle } from '@vueuse/core';

function setupPlugins() {
  /** 引入静态资源 */
  setupAssets();
}
async function setupApp() {
  const app = createApp(App);
  // 挂载全局状态
  setupStore(app);
  router.beforeEach((to, from, next) => {
    if (to.meta.title) {
      useTitle("猫黑-" + to.meta.title as string); //获取相应路由信息里面的title
    }
    next();
  });
  // 挂载路由
  app.use(router);

  app.mount("#app");
}
setupPlugins();
setupApp();
