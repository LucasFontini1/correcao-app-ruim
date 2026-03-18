<script setup>
    import { useExpense } from '@/composables/useExpense';
    import appButton from '../forms/appButton.vue';

    const expense = useExpense()
    const { filtered } = expense

    const categories = {
        food: 'Comida',
        transport: 'Transporte',
        other: 'Outros',
        all: 'Todos'
    }
    const icons = {
        food: 'mdi mdi-hamburger',
        transport: 'mdi mdi-bus',
        other: 'mdi mdi-dots-horizontal',
    }
</script>
<template>
    <div class="list">
        <h2>
            Lista de Gastos
        </h2>
        <h3 class="category">Total: {{ expense.total }}</h3>
        <h3 class="category">
            {{ categories[expense.filter.value] }}
        </h3>
        <ul>
            <li v-for="item in filtered" :key="item.id">
                <div class="string">
                    <div>
                        <h3>{{ item.title }}</h3>
                        <p class="category">{{ categories[item.category] }} <span :class="icons[item.category]"></span></p>

                    </div>
                    <div class="size">
                        <p>R${{ item.value }}</p>
                        <appButton variant="danger" @click="expense.removeExpense(item.id)">X</appButton>
                    </div>
                </div>

            </li>
        </ul>
    </div>
</template>
<style scoped>
    .list{
        margin-top: 40px;
        border: #344396 solid 1px;
        border-radius: 10px;
        padding: 20px;        
    }
    h2{
        text-align: center;
        padding: 0;
        margin: 0 05px 0;
    }
    h3.category{
        text-align: center;
        padding: 0;
        margin: 0 0 20px 0;
        color: gray;
        font-size: 15px ;
    }
    ul li{
        background-color: #344396;
        text-decoration: none;
        color: #F0F4EF;
        width: 80%;
        height: 80px;
        margin: 0 auto;
        border-radius: 10px;
        padding: 10px 15px;
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
        height: 100%;
        align-items: center;
    }
    div.string div{
        margin: 0;
        padding: 0;
    }
    h3{
        font-size: 20px;
        margin: 0;
    }
    p.category{
        font-size: 10px;
        margin: 0;
    }
    .size{
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>