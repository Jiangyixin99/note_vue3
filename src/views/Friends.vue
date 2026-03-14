<script
    setup
    lang="ts"
>
import Api from '@/const/Api';
import request from '@/utils/request';
import { ElIcon } from 'element-plus';
import { ref } from 'vue';

interface Friends {
    id: number
    friendName: string
    personalSignature: string
    avatarPath: string
    link: string
}

const FriendsList = ref<Friends[]>()

async function getFriendsList() {
    const res = await request.get(Api.getFriendsList)
    FriendsList.value = res.data
}

getFriendsList()
</script>

<template>
    <div class="container-white" style="gap: 1rem; padding: 1rem 2rem;">
        <div style="font-size: 2rem; font-weight: 600; margin-bottom: 1rem;">我的朋友们</div>

        <div class="flex-column" style="gap: 2rem;">

            <!-- <div class="flex" v-for="friend in FriendsList" -->
            <!-- style="border-radius: 8px; border: solid 0.01rem #53A3F2; gap: 1rem;"> -->
            <!-- 头像 -->
            <!-- <div style=""> -->
            <!-- <img style=" -->
            <!-- width: 8rem; -->
            <!-- height: 8rem; -->
            <!-- border-radius: 8px 0 0 8px; -->
            <!-- object-fit:cover;" :src="friend.avatarPath"> -->
            <!-- </div> -->
            <!-- <div class="flex-column" style="padding: .5rem 0; gap: 1rem;"> -->
            <!-- 名字 -->
            <!-- <div style="font-size: 1.3rem;  font-weight:700;">{{ friend.friendName }}</div> -->
            <!-- 个性签名 -->
            <!-- <div style="color: #666; font-size: .9rem;">{{ friend.personalSignature }}</div> -->

            <!-- </div> -->
            <!-- 链接 -->
            <!-- <a :href="friend.link"
                    style="width: 4rem; margin-left: auto; background-color: #CBE3FB;border-radius: 0 8px 8px 0; cursor: pointer;">
                    <span class=" flex"
                        style="height: 100%; justify-content: center; align-items: center; font-size: 2rem; color: #53A3F2; opacity: 1;">
                        <el-icon size="3rem">
                            <ArrowRight />
                        </el-icon>
                    </span>
                </a> -->
            <!-- </div> -->



            <div class="flex" style="border-radius: 8px; border: solid 0.01rem #53A3F2; gap: 1rem;">
                <!-- 头像 -->
                <div style="">
                    <img style="
                        width: 8rem;
                        height: 8rem;
                        border-radius: 8px 0 0 8px;
                        object-fit:cover;" src="@\assets\friendsAvatar\789.jpg">
                </div>
                <div class="flex-column" style="padding: .5rem 0; gap: 1rem;">
                    <!-- 名字 -->
                    <div style="font-size: 1.3rem;  font-weight:700;">Nen</div>
                    <!-- 个性签名 -->
                    <div style="color: #666; font-size: .9rem;">挥手不是再见 而是老弟你还得练</div>
                    <!-- 标签
                    <div>{{ }}</div> -->
                </div>
                <!-- 链接 -->
                <a href=""
                    style="width: 4rem; margin-left: auto; background-color: #CBE3FB;border-radius: 0 8px 8px 0; cursor: pointer;">
                    <span class=" flex"
                        style="height: 100%; justify-content: center; align-items: center; font-size: 2rem; color: #53A3F2; opacity: 1;">
                        <el-icon size="3rem">
                            <ArrowRight />
                        </el-icon>
                    </span>
                </a>
            </div>

            <div class="flex" style="border-radius: 8px; border: solid 0.01rem #53A3F2; gap: 1rem;">
                <!-- 头像 -->
                <div style="">
                    <img style="
                        width: 8rem;
                        height: 8rem;
                        border-radius: 8px 0 0 8px;
                        object-fit:cover;" src="@\assets\friendsAvatar\567.jpg">
                </div>
                <div class="flex-column" style="padding: .5rem 0; gap: 1rem;">
                    <!-- 名字 -->
                    <div style="font-size: 1.3rem;  font-weight:700;">ㄩㄎㄞㄓㄣ</div>
                    <!-- 个性签名 -->
                    <div style="color: #666; font-size: .9rem;">Patience is key in life.</div>
                    <!-- 标签
                    <div>{{ }}</div> -->
                </div>
                <!-- 链接 -->
                <a href="https://v.douyin.com/Hi0i7T6IoBM/ 5@0.com :0pm"
                    style="width: 4rem; margin-left: auto; background-color: #CBE3FB;border-radius: 0 8px 8px 0; cursor: pointer;">
                    <span class=" flex"
                        style="height: 100%; justify-content: center; align-items: center; font-size: 2rem; color: #53A3F2; opacity: 1;">
                        <el-icon size="3rem">
                            <ArrowRight />
                        </el-icon>
                    </span>
                </a>
            </div>

            <div class="flex" style="border-radius: 8px; border: solid 0.01rem #53A3F2; gap: 1rem;">
                <!-- 头像 -->
                <div style="">
                    <img style="
                        width: 8rem;
                        height: 8rem;
                        border-radius: 8px 0 0 8px;
                        object-fit:cover;" src="@\assets\friendsAvatar\584.jpg">
                </div>

                <div class="flex-column" style="padding: .5rem 0; gap: 1rem;">
                    <!-- 名字 -->
                    <div style="font-size: 1.3rem;  font-weight:700;">天才</div>
                    <!-- 个性签名 -->
                    <div style="color: #666; font-size: .9rem;">可恶的天才宇</div>
                    <!-- 标签
                    <div>{{ }}</div> -->
                </div>
                <!-- 链接 -->
                <a href=""
                    style="width: 4rem; margin-left: auto; background-color: #CBE3FB;border-radius: 0 8px 8px 0; cursor: pointer;">
                    <span class=" flex"
                        style="height: 100%; justify-content: center; align-items: center; font-size: 2rem; color: #53A3F2; opacity: 1;">
                        <el-icon size="3rem">
                            <ArrowRight />
                        </el-icon>
                    </span>
                </a>
            </div>


            <div class="flex" style="border-radius: 8px; border: solid 0.01rem #53A3F2; gap: 1rem;">
                <!-- 头像 -->
                <div style="">
                    <img style="
                        width: 8rem;
                        height: 8rem;
                        border-radius: 8px 0 0 8px;
                        object-fit:cover;" src="@\assets\friendsAvatar\106.jpg">
                </div>

                <div class="flex-column" style="padding: .5rem 0; gap: 1rem;">
                    <!-- 名字 -->
                    <div style="font-size: 1.3rem;  font-weight:700;">Yikz</div>
                    <!-- 个性签名 -->
                    <div style="color: #666; font-size: .9rem;">该怎么说道别呢</div>
                    <!-- 标签
                    <div>{{ }}</div> -->
                </div>
                <!-- 链接 -->
                <a href="https://v.douyin.com/WzR9g5NvSeQ/ 5@2.com :9pm"
                    style="width: 4rem; margin-left: auto; background-color: #CBE3FB;border-radius: 0 8px 8px 0; cursor: pointer;">
                    <span class=" flex"
                        style="height: 100%; justify-content: center; align-items: center; font-size: 2rem; color: #53A3F2; opacity: 1;">
                        <el-icon size="3rem">
                            <ArrowRight />
                        </el-icon>
                    </span>
                </a>
            </div>

            <div class="flex" style="border-radius: 8px; border: solid 0.01rem #53A3F2; gap: 1rem;">
                <!-- 头像 -->
                <div style="">
                    <img style="
                        width: 8rem;
                        height: 8rem;
                        border-radius: 8px 0 0 8px;
                        object-fit:cover;" src="@\assets\friendsAvatar\381.jpg">
                </div>

                <div class="flex-column" style="padding: .5rem 0; gap: 1rem;">
                    <!-- 名字 -->
                    <div style="font-size: 1.3rem;  font-weight:700;">cj</div>
                    <!-- 个性签名 -->
                    <div style="color: #666; font-size: .9rem;">行则将至</div>
                    <!-- 标签
                    <div>{{ }}</div> -->
                </div>
                <!-- 链接 -->
                <a href=""
                    style="width: 4rem; margin-left: auto; background-color: #CBE3FB;border-radius: 0 8px 8px 0; cursor: pointer;">
                    <span class=" flex"
                        style="height: 100%; justify-content: center; align-items: center; font-size: 2rem; color: #53A3F2; opacity: 1;">
                        <el-icon size="3rem">
                            <ArrowRight />
                        </el-icon>
                    </span>
                </a>
            </div>
        </div>

    </div>

</template>

<style scoped>
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

/* 容器 */
.container-white {
    padding: var(--global-padding);
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 0 -2px 8px rgba(0, 0, 0, .08);
}
</style>
