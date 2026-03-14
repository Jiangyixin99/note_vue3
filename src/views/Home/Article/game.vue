<script
    setup
    lang="ts"
></script>

<template>
    <div class="flex-column" style="margin: 1rem; font-size: 1.2rem;">
        <div>
            <a href="https://www.kdocs.cn/l/ckEh9v0H1nt9" target="_blank" style="">整合包下载地址</a>
        </div>

        <div>
            以下是游玩整合包的一些截图(图中其它人物是室友)
        </div>

        <div class="gallery">
            自建的宝可梦擂台
            <img loading="lazy" src="@\assets\article\game\2025-06-16_17.47.07.webp" alt="">
            <br>
            <img loading="lazy" src="@\assets\article\game\2025-06-16_17.47.21.webp" alt="">
        </div>


        <div class="gallery">
            集齐 三幻兽
            <img loading="lazy" src="@\assets\article\game\2025-06-15_18.42.32.webp" alt="">
        </div>

        <div class="gallery">
            野生彩虹马 应该不叫彩虹马 忘记叫啥了
            <img loading="lazy" src="@\assets\article\game\2025-06-11_15.10.41.webp" alt="">
        </div>




        <div class="gallery">
            紫水晶矿洞
            <img loading="lazy" src="@\assets\article\game\2025-06-10_22.40.54.webp" alt="">
        </div>



        <div class="gallery">
            甲克忍蛙
            <img loading="lazy" src="@\assets\article\game\2025-06-13_13.31.06.webp" alt="">
        </div>
        <div class="gallery">
            无极汰那
            <img loading="lazy" src="@\assets\article\game\2025-06-17_11.20.06.webp" alt="">
        </div>



        <div class="gallery">
            一些合照
            <img loading="lazy" src="@\assets\article\game\2025-06-13_16.40.51.webp" alt="">
            <br>
            <img loading="lazy" src="@\assets\article\game\2025-06-13_16.41.13.webp" alt="">
        </div>
        <div class="gallery">
            自拍
            <img loading="lazy" src="@\assets\article\game\2025-06-15_17.16.50.webp" alt="">
        </div>













    </div>
</template>

<style scoped>
a {
    color: #53A3F2;
}

img {
    border-radius: 8px;
    margin-bottom: 1rem;
}

.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    gap: 1.2rem;
    padding: 0.4rem;
}

.gallery img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* 统一比例，不留黑边 */
    border-radius: 12px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    /* cursor: zoom-in; */
    /* 提示可放大 */
}

.gallery img:hover {
    transform: scale(1.03);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}
</style>
