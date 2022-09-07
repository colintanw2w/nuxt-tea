<script setup lang="ts">

type Color = 'orange' | 'blue' | 'transparent';
interface Props {
    color?: Color;
    full?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    color: 'orange',
    full: false
});

const cssClasses = computed(() => {
    const colorClass = 'btn-' + props.color;
    const widthClass = props.full ? 'w-full' : '';
    return colorClass + ' ' + widthClass;
});
</script>

<template>
    <button v-bind="$attrs" class="btn" :class="cssClasses">
        <slot />
    </button>
</template>
