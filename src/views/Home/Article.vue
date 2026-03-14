<script
    setup
    lang="ts"
>
import Api from '@/const/Api'
import router from '@/router'
import request from '@/utils/request'
import { ElIcon } from 'element-plus'
import { ref, watch, } from 'vue'
import { useRoute } from 'vue-router'
interface Article {
    category: number
    contentPath: string
    title: string
    description: string
    createAt: string
    watchCount: number
    coverPath: string
}
const id = Number(useRoute().query.id)
const articleList = ref<Article>()


async function getArticleById() {
    const res = await request.get(Api.getArticleById, { params: { id: id } })
    articleList.value = res.data
}

// 拿到后端返回的完整路径，例如 /article/123
// router.replace({ path: articleList.value?.contentPath }) // 或 router.push

watch(articleList, newVal => {
    if (newVal?.contentPath) {
        router.replace({ path: newVal.contentPath })
    }
})



// 渲染文章字段
getArticleById()
</script>

<template>
    <div class="flex-column container-white" style="width: 100%; ">

        <div style="font-size: 3rem; font-weight: 500;">
            {{ articleList?.title }}
        </div>

        <div class="flex" style="gap: 2rem;">
            <div class="flex" style="align-items: center; gap: 0.2rem;">
                <div class="icon-blue flex">
                    <el-icon>
                        <Timer />
                    </el-icon>
                </div>
                <div style="font-size: 0.8rem; color: #666;">
                    {{ articleList?.createAt }}
                </div>
            </div>
            <div class="flex" style="align-items: center; gap: 0.2rem;">
                <div class="icon-blue flex">
                    <el-icon>
                        <ElementPlus />
                    </el-icon>
                </div>
                <div style="font-size: 0.8rem; color: #666;">
                    {{ articleList?.category }}
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>

</template>

<style scoped>
/* 容器 */
.container-white {
    padding: var(--global-padding);
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 0 -2px 8px rgba(0, 0, 0, .08);
}

/* 竖盒子 */
.flex-column {
    display: flex;
    flex-direction: column;
}

/* 横盒子 */
.flex {
    display: flex;
    /* justify-content: center; */
}

.icon-blue {
    /* stroke-width: 25; */
    justify-content: center;
    align-items: center;
    padding: 0.3rem 0.3rem;
    border-radius: 8px;
    background-color: #E2F0FF;
    font-size: 1.2rem;
    color: #53A3F2;
    box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.08);
}
</style>