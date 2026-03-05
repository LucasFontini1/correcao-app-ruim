<script setup>
    import { useExpense } from '@/composables/useExpense';
    // import { useRouter } from 'vue-router';
    import appHeader from '@/components/layouts/appHeader.vue';
    import appButton from '@/components/forms/appButton.vue';
    import recordList from '@/components/records/recordList.vue';
    import appFooter from '@/components/layouts/appFooter.vue';

    // const router = useRouter()
    const expense = useExpense()
</script>
<template>
    <appHeader></appHeader>
    <div class="page">
        <div class="buttons">
            <appButton @click="expense.filter.value = 'all'">Tudo</appButton>
            <appButton @click="expense.filter.value = 'food'">Comida</appButton>
            <appButton @click="expense.filter.value = 'transport'">Transporte</appButton>
            <appButton @click="expense.filter.value = 'other'">Outros</appButton>
        </div>
        <recordList></recordList>
    </div>
    <appFooter></appFooter>
</template>
<style scoped>
    .buttons{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 7px;
    }
</style>