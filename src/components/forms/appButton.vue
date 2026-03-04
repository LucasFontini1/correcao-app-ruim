<script setup>
    defineProps({
        type: {
            type: String,
            default: 'button',
        },
        variant: {
            type: String,
            default: 'primary'
        },
        disabled: Boolean,
    })
</script>
<template>
    <button class="app-btn" :class="variant" :type="type" :disabled="disabled">
    
    </button>
</template>