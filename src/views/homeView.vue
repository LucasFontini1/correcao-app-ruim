<script setup>
    import { useRouter } from 'vue-router';
    import appHeader from '@/components/layouts/appHeader.vue';
    import appButton from '@/components/forms/appButton.vue';
    import recordList from '@/components/records/recordList.vue';

    const router = useRouter()
</script>
<template>
    <appHeader showBack @back="router.back()"></appHeader>
    <div class="page">
        <div class="buttons">
            <appButton>Tudo</appButton>
            <appButton>Comida</appButton>
            <appButton>Transporte</appButton>
            <appButton>Outros</appButton>
        </div>
        <recordList></recordList>
    </div>
</template>
<style scoped>
    .buttons{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 7px;
    }
</style>