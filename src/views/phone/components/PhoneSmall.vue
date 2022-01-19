<template>
    <div class="phone-small" @click="emit('onOpen')">
        <div class="header-msg">
            <div></div>
            <div class="flex-align-center" style="gap: 4px">
                <NIcon size="18">
                    <CellularData124Regular />
                </NIcon>
                <NIcon size="18">
                    <Battery924Regular />
                </NIcon>
            </div>
        </div>
        <header>
            <NTime :time="system.nowTime" format="HH:mm" />
            <p>{{ system.weekName }}{{ system.timeName }}</p>
            <NTime :time="system.nowTime" format="MM-dd" />
        </header>
        <footer>
            <NIcon size="60">
                <Fingerprint24Regular />
            </NIcon>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { NIcon, NTime } from "naive-ui";
import { useSystemStore } from '@/store';
import { Battery924Regular, CellularData124Regular } from "@vicons/fluent";
import { Fingerprint24Regular } from "@vicons/fluent";

// interface Props {
//   /** 是否打开手机 */
//   phoneVisble?: boolean;
// };
// // 父组件传来的变量
// withDefaults(defineProps<Props>(), {
//   phoneVisble: true,
// });
const emit = defineEmits(["onOpen"]); // 父组件传来的方法
const system = useSystemStore(); // system数据 这里获取时间数据

</script>

<style scoped lang="scss">
@import "./PhoneSmall.scss";

header {
    font-size: 2rem;
    margin: 0 0 15rem 1.6rem;
}
.header-msg {
    padding: 10px;
    height: calc($phone-btnLine-height * 0.5);
    display: flex;
    justify-content: space-between;
    font-size: 12px;
}
</style>
