<template>
    <div class="flex-column container-white" style="height: 100%; gap: 1rem;">
        <div class="" style="font-size: 2.5rem; font-weight: 700;">你好, &nbsp;我是江一欣</div>
        <div>
            <div>
                不知名mc爱好者
            </div>
            <div>
                不知名
            </div>

        </div>
        <div class="flex-column" style="font-size: 1.5rem; gap: 1rem;">
            <div>
                我的技术栈
                <div style="font-size: 1rem; margin-left: 1rem;">
                    <li>
                        Vue(会用但不精通)
                    </li>
                    <li>
                        Springboot(会用但不精通)
                    </li>
                    <li>
                        JavaScript/ES6+

                        (会用但不精通)
                    </li>
                    <li>
                        HTML5 + CSS3

                        (会用但不精通)
                    </li>
                    <li>
                        MySQL

                        (会用但不精通)
                    </li>
                </div>
            </div>


            <div style="font-size: 1.5rem;">
                后续想学
                <div style="font-size: 1rem; margin-left: 1rem;">
                    <li>
                        React
                    </li>

                </div>
            </div>
        </div>
    </div>

</template>
<script
    setup
    lang="ts"
>
</script>
<style scoped>
li {
    color: #53A3F2;
}

/* 容器 */
.container-white {
    padding: 1rem;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 0 -2px 8px rgba(0, 0, 0, .08);
}

/* 竖盒子 */
.flex-column {
    display: flex;
    flex-direction: column;
}
</style>