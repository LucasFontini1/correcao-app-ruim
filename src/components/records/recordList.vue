<script setup>
    import { useExpense } from '@/composables/useExpense';
    import appButton from '../forms/appButton.vue';

    const expense = useExpense()
</script>
<template>
    <div class="list">
        <h2>
            Lista do dia
        </h2>
        <ul>
            <li v-for="item in expense.filtered" :key="item.id">
                <div class="string">
                    <div>
                        <h3>{{ item.title }}</h3>
                        <p class="category">{{ item.category }}</p>
                    </div>
                    <div class="size">
                        <p>{{ item.value }}</p>
                        <appButton variant="danger">X</appButton>
                    </div>
                </div>

            </li>
        </ul>
    </div>
</template>
<style scoped>
    .list{
        margin-top: 40px;
        border: #0D1821 solid 1px;
        border-radius: 10px;
    }
    h2{
        text-align: center;
    }
    ul li{
        background-color: #344396;
        text-decoration: none;
        color: #F0F4EF;
        width: 80%;
        height: 80px;
        margin: 0 auto;
        border-radius: 10px;
    }
    ul{
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
    }
    div.string{
        display: flex;
        justify-content: space-between;
    }
    div.string div{
        margin: 0;
        padding: 0;
    }
    h3{
        font-size: 20px;
    }
    p.category{
        font-size: 10px;
    }
</style>