import { defineStore } from "pinia";
import { store } from "@/store";

const weekDay = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];

const systemStore = defineStore({
  /** 区分不通状态的唯一标识 */
  id: "system-store",
  /** 状态 */
  state: () => {
    return {
      nowTime: new Date(),
    };
  },
  getters: {
    timeName(state) {
      const { nowTime } = state;
      if (nowTime.getHours() >= 0 && nowTime.getHours() < 12) {
        return "上午";
      } else if (nowTime.getHours() >= 12 && nowTime.getHours() < 18) {
        return "下午";
      } else {
        return "晚上";
      }
    },
    weekName(state) {
      const { nowTime } = state;
      return weekDay[nowTime.getDay()];
    }
  },
  actions: {
    resetNowTime() {
      this.nowTime = new Date();
    },
  },
});

export default function useSystemStore() {
  return systemStore(store);
}
