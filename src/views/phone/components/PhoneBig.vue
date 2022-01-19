<template>
  <header>
    <div class="header-msg">
      <div>
        <span>{{ system.timeName }}</span>
        <NTime :time="system.nowTime" format="HH:mm" />
      </div>
      <div class="flex-align-center" style="gap: 4px">
        <NIcon size="18">
          <CellularData124Regular />
        </NIcon>
        <NIcon size="18">
          <Battery924Regular />
        </NIcon>
      </div>
    </div>
    <div class="header-btn">
      <div>
        <NIcon size="18">
          <LeftOutlined />
        </NIcon>
        <span>猫黑</span>
      </div>
      <NIcon size="18">
        <MenuOutlined />
      </NIcon>
    </div>
  </header>
  <div class="box" id="gundong">
    <template v-for="item in msgList">
      <div v-if="item.name === 'cat'" class="msgList">
        <NAvatar style="min-width: 28px;" round size="small" :src="AvatarImg" />
        <div class="message">
          {{ item.msg }}
          <router-link v-if="item.link" :to="item.link">{{ item.linkName }}</router-link>
        </div>
        <div style="min-width: 28px;"></div>
      </div>
      <div v-else class="msgList right">
        <div style="min-width: 28px;"></div>
        <div class="message">
          {{ item.msg }}
          <router-link v-if="item.link" :to="item.link">{{ item.linkName }}</router-link>
        </div>
        <NAvatar style="min-width: 28px;" round size="small" :src="AvatarImg1" />
      </div>
    </template>
  </div>
  <footer>
    <div class="input_box">
      <input v-model="message" type="text" placeholder="请输入聊天内容" />
      <NButton @click="sendMsg" v-if="message" size="tiny" type="info">发送</NButton>
      <NIcon v-else size="23">
        <MessageOutlined />
      </NIcon>
    </div>
    <nav>
      <NIcon size="15">
        <MenuOutlined />
      </NIcon>
      <NIcon size="15" @click="emit('onClose')">
        <BorderOutlined />
      </NIcon>
      <NIcon size="15">
        <LeftOutlined />
      </NIcon>
    </nav>
  </footer>
</template>

<script setup lang="ts">
import { NIcon, NButton, NTime, NAvatar } from "naive-ui";
import {
  MenuOutlined,
  BorderOutlined,
  LeftOutlined,
  MessageOutlined,
} from "@vicons/antd";
import { Battery924Regular, CellularData124Regular } from "@vicons/fluent";
import { useSystemStore } from '@/store';
import { ref, reactive, onMounted, watch, nextTick, withDefaults, onActivated } from "vue";
import AvatarImg from "@/assets/image/qq头像.jpg";
import AvatarImg1 from "@/assets/image/qq头像1.jpg";

const emit = defineEmits(["onClose"]); // 父组件传来的方法

const message = ref(""); // 聊天输入框的内容绑定
const system = useSystemStore(); // system数据 这里获取时间数据

// 父组件传来的props
const props = defineProps({
  /** 是否初始化 */
  ifInit: Boolean,
})
// 消息数组
const opList = [
  { name: 'cat', msg: '刚上大学我就想有自己的网站了，拖延到现在才摸出来了真是太罪过了😫', link: '', linkName: '' },
  { name: 'one', msg: 'hhh，不过话说你的网站地址为什么是', link: '/', linkName: 'catblack.top' },
  { name: 'cat', msg: '我没啥思路，就拿我游戏ID中式英文一下了', link: '', linkName: '' },
  { name: 'one', msg: '你的网站有哪些内容呀🤪', link: '', linkName: '' },
  { name: 'cat', msg: '我是个打工仔嘛，目前想写一个有特色的，有个性的', link: '/person', linkName: '个人简历' },
  { name: 'cat', msg: '然后就是有一个自己的博客，也就是记录自己的所学嘛，做个', link: '/text', linkName: '学习笔记' },
  { name: 'cat', msg: '还想做一个存网页的、分享网页的，也就是', link: '/home', linkName: '导航页' },
  { name: 'cat', msg: '我也喜欢打游戏，特别是rpg，再整一个我的', link: '/game', linkName: '游戏历程' },
  { name: 'cat', msg: '最后再搞个记录我这个网站建设的', link: '/time', linkName: '时间线' },
  { name: 'one', msg: '感觉要花费挺长时间的，加油(ง •_•)ง', link: '', linkName: '' },
];
let msgList = reactive<any[]>([]);

// 到达手机底部
const toBottom = () => {
  nextTick(() => {
    let doc = document.getElementById('gundong'); // 获取对象
    if (doc) {
      doc.scrollTop = doc.scrollHeight // 滚动高度
    }
  });
}
// 发送消息
const sendMsg = () => {
  msgList.push({
    name: 'one',
    msg: message.value,
    link: '',
    linkName: ''
  })
  message.value = "";
  toBottom();
}

// 添加消息
let timeId: number | null | undefined;
let timeIndex = 0;
const addMsg = () => {
  msgList.push(opList[timeIndex]);
  if (timeIndex === opList.length - 1) {
    if (timeId) clearInterval(timeId);
  }
  ++timeIndex;
  toBottom();
};

watch(
  () => props.ifInit,
  (ifInit) => {
    // msgList = [];
    if (ifInit) {
      timeId = setInterval(() => addMsg(), 1000);
    }
    else {
      msgList = opList;
      toBottom();
    }
  },
  { immediate: true }
);

onActivated(() => toBottom());
</script>

<style scoped lang="scss">
@import "./PhoneBig.scss";
</style>
