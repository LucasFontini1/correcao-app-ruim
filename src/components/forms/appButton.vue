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
/* estilo base do botão */
button.app-btn{
    background-color: #344396;
    color: #F0F4EF;
    padding: 5px 10px;
    font-size: 18px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
}

.app-btn:active{
    transform: scale(0.95);
}
.app-btn.danger{
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
}

.app-btn.danger:active{
    background-color: rgb(200,0,0);
}
.app-btn.add{
    background-color: green;
}

.app-btn.add:active{
    background-color: rgb(0,180,0);
}
</style>