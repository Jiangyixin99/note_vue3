<script
    setup
    lang="ts"
></script>

<template>
    <div class="flex-column" style="">
        由于本人日常没什么好分享的 于是分享分享室友的

        <div class=" gallery" style="gap: 1rem;">
            <img src="@\assets\article\daily\微信图片_2025-10-28_191002_723.jpg" alt="">
            <img src="@\assets\article\daily\微信图片_2025-10-28_191035_322.jpg" alt="">
            <img src="@\assets\article\daily\微信图片_2025-10-28_191040_297.jpg" alt="">
            <img src="@\assets\article\daily\微信图片_2025-10-28_191050_998.jpg" alt="">
            <img src="@\assets\article\daily\微信图片_2025-10-28_191055_211.jpg" alt="">
            <img src="@\assets\article\daily\微信图片_2025-10-28_191059_472.jpg" alt="">
            <img src="@\assets\article\daily\微信图片_2025-10-28_191103_309.jpg" alt="">
            <img src="@\assets\article\daily\微信图片_2025-10-28_191112_347.jpg" alt="">
            <div>有点小帅</div>
        </div>
    </div>
</template>

<style scoped>
a {
    color: #53A3F2;
}

.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    gap: 1.2rem;
    padding: 0.4rem;
}

.gallery img {
    width: 80%;
    height: 80%;
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

@media (prefers-color-scheme: dark) {
    .gallery img {
        filter: brightness(0.95);
    }
}

/* ===== 移动端间距微调 ===== */
@media (max-width: 600px) {
    .gallery {
        gap: 0.8rem;
    }
}
</style>
