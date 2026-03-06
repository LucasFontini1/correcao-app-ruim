<script setup>
    import appButton from '../forms/appButton.vue';
    import { useExpense } from '@/composables/useExpense';
    import { useRouter } from 'vue-router';

    const router = useRouter()
    const expense = useExpense()
</script>
<template>
    <footer>
        <appButton variant="add" @click="router.push('/new-item')">Adicionar</appButton>
        <appButton variant="danger" @click="expense.clearAll()" v-if="expense.filtered !== 0">Limpar</appButton>
    </footer>
</template>
<style scoped>
footer{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 20px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    border-top: solid #0D1821 1px;
}
</style>