<script setup>
    defineProps({
        title: {
            type: String,
            default: 'Controle de Gastos Rapido',
        },
        showBack: Boolean,
    })

    defineEmits(['back'])
</script>
<template>
    <div class="header">
    <button v-if="showBack" @click="$emit('back')" class="bot-vol">←</button>
        <h1>{{ title }}</h1>
    </div>
</template>
<style>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  background: #0b5cff;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 100;
}
    h1{
        font-size: 20px;
    }
    .bot-vol{
        font-size: 20px;
        border: none;
        background-color: rgb(156, 177, 255);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 44px;
        height: 44px;
        color: black;
        border-radius: 20px;
    }
</style>