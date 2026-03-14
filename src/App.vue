<template>
    <!-- container-blue -->
    <div class="flex-column " style="width: 75rem; margin: 0 auto;gap: 2rem; ">

        <!-- 顶部栏 -->
        <div class="top-bar">
            <!-- 标题 -->
            <div class="flex title-home" style="align-items: center; gap: 1rem;">
                <div>
                    <el-icon size="1.6rem" color="#53A3F2">
                        <House />
                    </el-icon>
                </div>
                <div>
                    <router-link to="/">
                        jiangyixin's blog
                    </router-link>
                </div>
            </div>

            <!-- 导航栏 -->
            <div class="flex">

                <div>
                    <router-link :to="{ name: 'home', query: { category: -1 } }" class="nav">
                        主页
                    </router-link>
                </div>
                <!-- <div>
                    <router-link to="/home" class="nav">
                        归档
                    </router-link>
                </div> -->
                <div>
                    <router-link to="/about" class="nav">
                        关于
                    </router-link>
                </div>
                <div>
                    <router-link to="/friends" class="nav">
                        友链
                    </router-link>
                </div>
                <div>
                    <router-link to="/little" class="nav">
                        留言
                    </router-link>
                </div>


                <a class="nav" :href="githubLink" target="_blank" rel="noopener noreferrer">
                    Github
                    <el-icon style="color: #999;">
                        <TopRight />
                    </el-icon>
                </a>
            </div>

            <!-- 搜索栏 -->
            <div>
                <el-input class="search" type="text"></el-input>
            </div>
        </div>

        <!-- 下 -->
        <div class="flex" style="gap: 2rem; ">
            <!-- 左 -->
            <div class="flex-column" style="
            gap: 2rem;
            width: 18rem; ">

                <!-- 左1 -->
                <!-- 介绍 -->
                <div class="introduction container-white flex-column">

                    <!-- avatar -->
                    <div style="">
                        <img style="
                        width: 20rem;
                        height: 16rem;
                        border-radius: 8px;
                        
                        object-fit: cover;" src="@\assets\userAvatar\1747988806127.webp" loading="lazy">
                    </div>

                    <!-- id -->
                    <div class="id" style="text-align: center; font-weight: 700; ">
                        jiangyixin
                    </div>

                    <!-- Motto -->
                    <div style="text-align: center; font-weight: 100; font-size: 1rem;">
                        己所不欲 勿施于人
                    </div>

                    <!-- link -->
                    <div>

                    </div>

                </div>

                <!-- 分类 -->
                <Category></Category>

            </div>

            <div style=" width: 55rem;">
                <router-view>

                </router-view>
            </div>
        </div>

    </div>

</template>

<script
    setup
    lang="ts"
>
import { ElIcon, ElInput } from 'element-plus';
import Category from './components/App/Category.vue';
import { ref } from 'vue';
const githubLink = ref("https://github.com/Jiangyixin99")
</script>


<style scoped>
/* 容器 */
.container-white {
    padding: 1rem;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 0 -2px 8px rgba(0, 0, 0, .08);
}

.container-blue {
    border-radius: 20px;
    background-color: #E2F0FF;
    box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.08);
}

/* 横盒子 */
.flex {
    display: flex;
    justify-content: center;
}

/* 竖盒子 */
.flex-column {
    display: flex;
    flex-direction: column;
}

/* 顶栏 */
.top-bar {
    width: 100%;
    padding: 0 1rem 0;
    height: 5rem;
    background: #fff;
    box-shadow: 0 -2px 8px rgba(0, 0, 0, .08);
    border-radius: 0 0 20px 20px;
    display: flex;
    align-items: center;
    z-index: 999;
    justify-content: space-between;
}

.id {
    position: relative;
    /* 让伪元素相对它定位 */
}

.id::after {
    content: '';
    position: absolute;
    left: 7.3rem;
    bottom: -0.6rem;
    width: 1.4rem;
    height: 0.3rem;
    background: #53A3F2;
    border-radius: 8px;
}

/* 介绍 */
.introduction {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

/* 标题 */
.title-home {
    padding: 0.2rem 1rem;
    height: 2rem;
    border-radius: 8px;
    line-height: 100%;
    font-size: 1.1rem;
    font-weight: 700;
    color: #53A3F2;
}

.title-home:hover {
    background-color: #E2F0FF;
    transition: 0.3s ease;
    color: #3275B4;
    cursor: pointer;
}






/* 导航 */
.nav {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 700;
    border-radius: 8px;
    text-decoration: none;
    color: black;
}

.nav:hover {
    background-color: #E2F0FF;
    transition: 0.3s ease;
    color: #3275B4;
    cursor: pointer;
}
</style>
