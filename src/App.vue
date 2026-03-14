<template>
    <div class="app">
        <h1>留言板</h1>
        <form @submit.prevent="addMessage" class="message-form">
            <input v-model="newMessage" type="text" placeholder="请输入留言内容" required />
            <button type="submit">提交留言</button>
        </form>
        <div class="message-list">
            <div v-for="(message, index) in messages" :key="index" class="message-item">
                <p>{{ message }}</p>
            </div>
        </div>
    </div>
</template>

<script
    setup
    lang="ts"
>
import { ref } from 'vue';

const newMessage = ref('');
const messages = ref<string[]>([]);

const addMessage = () => {
    if (newMessage.value.trim()) {
        messages.value.push(newMessage.value);
        newMessage.value = '';
    }
};
</script>
<style>
.app {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
}

h1 {
    text-align: center;
    color: #333;
}

.message-form {
    margin-bottom: 20px;
    display: flex;
}

.message-form input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-right: 10px;
}

.message-form button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.message-form button:hover {
    background-color: #45a049;
}

.message-list {
    border-top: 1px solid #ddd;
    padding-top: 20px;
}

.message-item {
    padding: 10px;
    border-bottom: 1px solid #eee;
}

.message-item p {
    margin: 0;
}
</style>
