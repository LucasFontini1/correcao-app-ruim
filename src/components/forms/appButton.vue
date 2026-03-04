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
    <button 
        class="app-btn" 
        :class="variant" 
        :type="type" 
        :disabled="disabled"
    >
        <slot></slot>
    </button>
</template>
<style scoped>
    button.app-btn{
        background-color: #344396;
        color: #F0F4EF;
        padding: 5px 10px;
        font-size: 18px;
        border-radius: 10px;
        border: none;
    }
    .app-btn:active{
        transform: scale(0.95);
        background-color: #273797;
    }
    button.danger{
        background-color: #344396;
        color: #F0F4EF;
        font-size: 18px;
        height: 30px;
        width: 30px;
        border-radius: 10px;
        border: none;
        background-color: red;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .danger:active{
        transform: scale(0.95);
        background-color: #273797;

    }
</style>