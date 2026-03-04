<script setup>
    import { computed } from 'vue';

    const props = defineProps({
        modelValue: [String, Number],
        type: {
            type: String,
            default: 'text'
        },
        placeholder: String,
        required: Boolean,
        label: String,
    })

    const emit = defineEmits(['update:modelValue']);

    const value = computed({
        get: () => props.modelValue,
        set: (val) => emit('update:modelValue', val),
    });

</script>
<template>
  <div class="app-input">
    <label v-if="label" class="label">
      {{ label }}
      <span v-if="required" class="required">*</span>
    </label>
    <input
      v-model="value"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      class="input"
    />
  </div>
</template>