<template>
    <div class="flex-column container-white" style="height: 100%; width: 55rem;">

        <div style="font-weight: 700; font-size: 2rem; padding-left: 1rem;">留言</div>
        <!-- 排序 -->
        <div class="order-wrapper">
            <div>
                <el-select v-model="orderBy" placeholder="Select" style="width: 10rem;">
                    <el-option v-for="type in orderByType" :value="type.value" :label="type.label"></el-option>
                </el-select>
            </div>
        </div>

        <div>
            <el-scrollbar height="30rem" style="padding: 1rem;">
                <div v-for="note in notes" :key="note.id" style="margin-bottom: 0.5rem; ">
                    <div class="container-white-blue flex-column" style="gap: 1rem;">
                        <div class="font-large">{{ note.content }}</div>
                        <div class="flex"
                            style="color: #666; align-items: center;justify-content: flex-end; gap: .5rem;">
                            <div class="flex" style="align-items: center;">
                                <div @click="likeCount(note.id, note.like)">
                                    <svg t="1761019663273" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" p-id="6765" width="1rem">
                                        <path
                                            d="M512 901.747c-13.584 0-26.122-4.18-37.094-13.061-8.882-7.315-225.698-175.02-312.424-311.38-28.735-44.93-68.441-106.057-68.441-192.784 0-144.718 108.147-262.269 240.326-262.269 67.396 0 131.657 30.825 177.633 84.637 45.453-54.335 109.192-84.637 177.11-84.637 132.702 0 240.327 117.551 240.327 262.27 0 85.159-37.094 143.673-67.396 191.216l-1.045 1.567c-86.727 136.36-303.543 304.588-312.425 311.38-10.449 8.359-22.987 13.06-36.571 13.06zM334.367 164.049c-109.714 0-198.53 98.743-198.53 220.473 0 74.188 33.959 127.478 61.649 170.319 83.07 130.09 294.138 294.139 303.02 300.93 3.657 2.613 7.314 4.18 11.494 4.18s7.837-1.567 11.494-4.18c8.882-6.791 219.95-170.84 303.02-300.93l1.045-1.568c28.212-44.93 60.604-95.608 60.604-168.75 0-121.209-89.339-220.474-198.53-220.474-60.082 0-115.984 29.257-153.6 80.98l-6.27 8.881c-4.18 5.225-10.449 8.36-16.718 8.36s-13.061-3.135-16.718-8.36l-6.27-8.881c-39.706-51.2-96.13-80.98-155.69-80.98z"
                                            p-id="6766" fill="#bfbfbf"></path>
                                    </svg>
                                </div>
                                <div class="font-small">{{ note.like }}</div>
                            </div>
                            <div class="font-small">
                                {{ note.createTime }}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 分页 -->
                <div class="flex" style="justify-content: center; margin-top: 1rem;">
                    <el-pagination background layout="prev, pager, next" :current-page="pagelog.pageNum"
                        :page-size="pagelog.pageSize" :total="pagelog.total" @current-change="handlePageChange" />
                </div>
            </el-scrollbar>
        </div>

        <div class="flex" style="padding: 1rem;gap: 1rem;">
            <el-input v-model="input" />
            <el-button @click="submitNote">留言</el-button>
        </div>



    </div>
</template>

<script
    setup
    lang="ts"
>
import request from '@/utils/request';
import { ElInput, ElMessage, ElSelect, ElButton, ElScrollbar, ElOption, ElPagination } from 'element-plus';
import { onMounted, reactive, ref, watch } from 'vue';
import Api from '@/const/Api';



interface Note {
    id: number
    content: string
    createTime: string
    like: number
}
interface Pagelog {
    pageNum: number
    pageTotal: number
    pageSize: number
    total: number
}
const notes = ref<Note[]>()
const pagelog = ref<Pagelog>({ pageNum: 1, pageSize: 10, pageTotal: 0, total: 0 })
const input = ref('')

function handlePageChange(No: number) {
    pagelog.value.pageNum = No
    loadNotes()
}
const orderBy = ref({
    label: 'Desc by time',
    value: 2
})
// 排序类型
const orderByType = reactive(
    [
        {
            label: 'Asc by time',
            value: 1
        },
        {
            label: 'Desc by time',
            value: 2
        },
        {
            label: 'Asc by like',
            value: 3
        },
        {
            label: 'Desc by like',
            value: 4
        },
    ])
// 留言提交
async function submitNote() {
    if (!input.value.trim()) {
        ElMessage.error("留言为空")
        return
    }
    const res = await request.post(Api.postNote, { content: input.value })
    input.value = ''
    await loadNotes()
}
// 点赞
async function likeCount(noteId: any, noteLike: number) {
    const res = await request.post(Api.postNoteLike, {
        id: noteId,
        like: noteLike
    })
    await loadNotes()
}
// 加载
async function loadNotes() {
    try {
        const res = await request.get(Api.getNote, {
            params: {
                orderBy: orderBy.value.value,
                pageNo: pagelog.value.pageNum,
                pageSize: pagelog.value.pageSize
            }
        })
        notes.value = res.data.list
        pagelog.value = res.data
    }
    catch (error) {
        console.error("cw", error)
    }

}
let refreshTimer = null
// 监听
watch(orderBy, () => {
    loadNotes()
})
onMounted(() => {
    // 每30秒刷新一次（可根据需要调整时间间隔）
    refreshTimer = setInterval(() => {
        console.log('定时刷新笔记列表...')
        loadNotes()
    }, 20000) // 30000毫秒 = 30秒
})
loadNotes()

</script>


<style scoped>
.order-wrapper {
    padding: var(--global-padding);
    margin: 0 .5rem;
    display: flex;
    justify-content: end;
}
</style>
