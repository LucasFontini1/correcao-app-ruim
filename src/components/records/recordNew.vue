<script setup>
import { useExpense } from '@/composables/useExpense'
import appInput from '../forms/appInput.vue'
import appButton from '../forms/appButton.vue'

const expense = useExpense()
</script>
<template>
  <div class="add">
    <h2>Adicionar item</h2>
    <form @submit.prevent="expense.addExpense()">
      <div class="a um">
        <appInput
          label="Título"
          placeholder="Exemplo: Comida"
          required
          v-model="expense.title.value"
        ></appInput>
      </div>
      <div class="a dois">
        <appInput
          label="Valor"
          placeholder="Exemplo: 15"
          required
          v-model="expense.value.value"
        ></appInput>
      </div>
      <div class="a tres">
        <appInput
          label="Categoria"
          placeholder="Exemplo: food, transport ou other"
          required
          v-model="expense.category.value"
        ></appInput>
      </div>

      <appButton type="submit">Enviar</appButton>
    </form>
  </div>
</template>
<style scoped>
h2 {
  text-align: center;
  font-family: 'comfortaa';
  margin-bottom: 40px;
}
form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
}
div.a{
    margin-bottom: 20px;
}
</style>
