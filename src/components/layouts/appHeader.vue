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
  height: 76px;
  background: #344396;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 100;
  justify-content: center;
  gap: 15px;
}
    h1{
        font-size: 20px;
        font-family: 'comfortaa';
    }
    .bot-vol{
        font-size: 25px;
        border: none;
        background-color: #B4CDED;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 44px;
        height: 44px;
        color: #0D1821;
        border-radius: 20px;
    }
    .bot-vol:active{
        background-color: #94baeb;
        transform: scale(0.95);
    }
</style>