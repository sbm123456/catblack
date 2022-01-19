<template>
    <div class="time-box">
        <NCard title="时间线" :bordered="false" size="large" class="rounded-16px shadow-sm">
            <NTimeline size="large">
                <NTimelineItem
                    type="default"
                    title="后续待开发"
                    time="Tomorrow and tomorrow ..."
                >
                    <n-icon>
                        <n-spin size="small" />
                    </n-icon>
                    <div>学习笔记 -> 个人简历 -> 导航页 -> 游戏历程 -> 手机回复功能 -> 搜索功能</div>
                </NTimelineItem>
                <NTimelineItem
                    v-for="item in Timelist"
                    :type="item.type"
                    :title="item.title"
                    :content="item.content"
                    :time="item.time"
                ></NTimelineItem>
            </NTimeline>
        </NCard>

        <n-card title="项目信息" :bordered="false" size="small" class="rounded-16px shadow-sm">
            <n-descriptions label-placement="left" bordered size="small" :column="2">
                <n-descriptions-item label="版本">
                    <n-tag type="primary">{{ packageJson.version }}</n-tag>
                </n-descriptions-item>
                <n-descriptions-item label="Github地址">
                    <div>暂无</div>
                    <!-- <a
                        class="text-primary"
                        href="https://github.com/honghuangdc/soybean-admin"
                        target="_blank"
                    >Github地址</a>-->
                </n-descriptions-item>
            </n-descriptions>
        </n-card>

        <n-card title="开发环境依赖" :bordered="false" size="small" class="rounded-16px shadow-sm">
            <n-descriptions label-placement="left" bordered size="small">
                <n-descriptions-item
                    v-for="item in packageJson.devDependencies"
                    :key="item.name"
                    :label="item.name"
                >{{ item.version }}</n-descriptions-item>
            </n-descriptions>
        </n-card>

        <n-card title="生产环境依赖" :bordered="false" size="small" class="rounded-16px shadow-sm">
            <n-descriptions label-placement="left" bordered size="small">
                <n-descriptions-item
                    v-for="item in packageJson.dependencies"
                    :key="item.name"
                    :label="item.name"
                >{{ item.version }}</n-descriptions-item>
            </n-descriptions>
        </n-card>
    </div>
</template>

<script setup lang="ts">
import { NTimeline, NTimelineItem, NCard, NDescriptions, NDescriptionsItem, NTag, NIcon, NSpin } from "naive-ui";
import { packageJson } from '@/utils';

const Timelist: {
    type: "default" | "error" | "info" | "success" | "warning" | undefined,
    title: string | undefined,
    content: string | undefined,
    time: string | undefined,
}[] = [
        {
            type: "info",
            title: "时间线网页大致完成",
            content: "暂时没想到好看的设计，就简简单单的样子吧",
            time: "2022/01/19",
        },
        {
            type: "info",
            title: "网站框架搭建完毕",
            content: "通过Vue3 + Vite + TypeScript + Pinia搭建（虽然都不会，但学就完事了, 参考链接：https://juejin.cn/post/7036745610954801166#heading-1",
            time: "2022/01/18",
        },
        {
            type: "success",
            title: "网站成功上线",
            content: "申请域名，通过腾讯云服务器和宝塔windows面板成功将网站上线",
            time: "2022/01/08",
        },
    ]
</script>

<style scoped lang="scss">
.time-box {
    display: flex;
    margin: 20px;
    flex-direction: column;
    gap: 15px;
}
</style>
