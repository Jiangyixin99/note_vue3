<script
    setup
    lang="ts"
>
import Api from '@/const/Api'
import request from '@/utils/request'
import { ref } from 'vue'

interface Category {
    category: number
    total: number
    categoryDesc: string
}

const categoryList = ref<Category[]>()
// 获取 分组后每组的数量
async function categoryCount() {
    const res = await request.get(Api.getCategoryCount)
    categoryList.value = res.data
}

categoryCount()
</script>
<template>
    <div class="container-white">
        <div class="title-small">分类</div>
        <div v-for="data in categoryList">
            <router-link :to="{ name: 'home', query: { category: data.category } }" class="flex tag-hover">
                <div>{{ data.categoryDesc }}</div>
                <div class="tag">{{ data.total }}</div>
            </router-link>
        </div>
    </div>
</template>


<style scoped>
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
    justify-content: center;
}

/* 标签 */
.tag {
    padding: 0 0.5rem;
    font-weight: 500;
    display: flex;
    color: #3275B4;
    border-radius: 5px;
    background-color: #E2F0FF;
}

.tag-hover {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    text-decoration: none;
    color: black;
    cursor: pointer;
}

.tag-hover:hover {
    transition: 0.3s ease-in-out;
    padding-left: 1.2rem;
    display: flex;
    color: #3275B4;
    background-color: #E2F0FF;
}

/* 小标题 */
.title-small {
    position: relative;
    padding: 0 1rem;
    font-weight: 700;
    font-size: 1.3rem;
}

.title-small::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0.5rem;
    width: 0.3rem;
    height: 1rem;
    background-color: #53A3F2;
    border-radius: 8rem;
}
</style>