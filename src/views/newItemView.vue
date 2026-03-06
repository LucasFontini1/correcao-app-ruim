<script setup>
    import appHeader from '@/components/layouts/appHeader.vue';
    import recordNew from '@/components/records/recordNew.vue';
    import { useRouter } from 'vue-router';
import AppFooter from '@/components/layouts/appFooter.vue';

    const router = useRouter()
</script>
<template>
    <appHeader title="Novo Item" show-back @back="router.back()">
        
    </appHeader>
    <div class="page">
        <recordNew>
        </recordNew>
    </div>
    <AppFooter></AppFooter>
</template>