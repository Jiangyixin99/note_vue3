<template>
    <div style="height: 100%; width: 100%;">
        <el-scrollbar>
            <div class="flex-column" style="gap: 2rem;">
                <div v-for="article in articleList" class="flex-column container-white articleList-hover">
                    <!-- TODO -->
                    <!-- 这里用路由传参 -->
                    <router-link @click="watchCount(article.id, article.watchCount)"
                        :to="{ name: 'article', query: { id: article.id } }">
                        <div class=" article-title">{{ article.title }}</div>
                        <div class="flex" style="gap: 1rem; ">
                            <div class="flex" style="align-items: center; gap: 0.2rem;">
                                <div class="icon-blue flex">
                                    <el-icon>
                                        <Timer />
                                    </el-icon>
                                </div>
                                <div style="font-size: 0.8rem; color: #666;">
                                    {{ article.createAt }}
                                </div>
                            </div>

                            <div class="flex" style="align-items: center; gap: 0.2rem;">
                                <div class="icon-blue flex">
                                    <el-icon>
                                        <ElementPlus />
                                    </el-icon>
                                </div>
                                <div style="font-size: 0.8rem; color: #666;">
                                    {{ article.category }}
                                </div>
                            </div>
                        </div>

                        <div style="margin-top: 1rem;">{{ article.description }}</div>

                        <div class="flex" style="align-items: center; gap: 0.2rem; justify-content: end;">
                            <el-icon>
                                <View />
                            </el-icon>
                            <div style="font-size: 0.8rem; color: #666;">
                                {{ article.watchCount }}
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>


            <!-- 分页 -->
            <div class="flex" style="justify-content: center; margin-top: 1rem;">
                <el-pagination background layout="prev, pager, next" :current-page="pagelog.pageNum"
                    :page-size="pagelog.pageSize" :total="pagelog.total" @current-change="handlePageChange" />
            </div>
        </el-scrollbar>
    </div>
</template>
<script
    setup
    lang="ts"
>
import Api from '@/const/Api';
import request from '@/utils/request';
import { ElScrollbar, ElPagination, ElIcon } from 'element-plus';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
interface Article {
    id: number
    category: number
    contentPath: string
    title: string
    description: string
    createAt: string
    watchCount: number
    coverPath: string
}
interface Pagelog {
    pageNum: number
    total: number
    pageSize: number
    pageTotal: number
}
// 渲染文章页
async function loadArticle() {
    const res = await request.get(Api.getArticle, {
        params: {
            pageNo: pagelog.value.pageNum,
            pageSize: pagelog.value.pageSize,
            category: category.value
        }
    })
    articleList.value = res.data.list
    pagelog.value = res.data
}
function handlePageChange(No: number) {
    pagelog.value.pageNum = No
    loadArticle()
}

const articleList = ref<Article[]>()
// 在这里设置分页
const pagelog = ref<Pagelog>({ pageNum: 1, pageSize: 10, pageTotal: 0, total: 0 })
const route = useRoute()
const category = ref(Number(route.query.category))
// 监听路由对象的变换器给 category.value 的值给替换成新值
watch(// 每次返回新值
    () => route.query.category,
    (newVal, oldVal) => {
        category.value = Number(newVal || 0)
        loadArticle()
    }, // 首次也打一次
    { immediate: true }
)

// post接口直接传
// 浏览增加
async function watchCount(id: number, watchCount: number) {
    const res = await request.post(Api.postArticleWatchCount, {
        id: id,
        watchCount: watchCount
    })
    await loadArticle()

}
let refreshTimer = null
onMounted(() => {
    // 每30秒刷新一次（可根据需要调整时间间隔）
    refreshTimer = setInterval(() => {
        loadArticle()
    }, 30000) // 30000毫秒 = 30秒
})
loadArticle()
</script>
<style scoped>
svg {
    stroke-width: 2.5;
}

/* 容器 */
.container-white {
    padding: 1rem;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 0 -2px 8px rgba(0, 0, 0, .08);
}

/* 横盒子 */
.flex {
    display: flex;
    /* justify-content: center; */
}

/* 竖盒子 */
.flex-column {
    display: flex;
    flex-direction: column;
}

.article-title {
    font-size: 2.5rem;
    font-weight: 700;
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

/* TODO .articleList-hover {} */
</style>