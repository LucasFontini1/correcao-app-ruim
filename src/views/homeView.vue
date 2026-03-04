<script setup>
    import { useRouter } from 'vue-router';
    import appHeader from '@/components/layouts/appHeader.vue';

    const router = useRouter()
</script>
<template>
    <appHeader showBack @back="router.back()"></appHeader>
    <div class="page">
    </div>
</template>