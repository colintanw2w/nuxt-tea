<script setup lang="ts">
import { defineProps } from 'vue';
interface Props {
    id?: string;
    type?: string;
    label?: string;
    value?: string;
    text?: string;
    required?: boolean
    errors?: string[],
    small?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    id: '',
    type: 'text',
    label: '',
    value: '',
    errors: undefined,
    text: '',
    required: false,
    small: false
});
const { nextId } = useId('login-input-');
const generatedId = nextId();

</script>
<template>
    <div class="form-group">
        <label v-if="label" :for="generatedId" class="form-label" v-text="label" />
        <input
            :id="generatedId"
            :class="{ 'is-invalid': errors?.length, 'form-control-sm': small }"
            :required="required"
            :type="type"
            :value="value"
            class="form-control"
            v-bind="$attrs"
        >

        <div v-if="errors?.length" class="invalid-feedback" v-text="errors[0]" />

        <small v-if="text" class="form-text text-muted d-block" v-text="text" />
    </div>
</template>
