<script setup lang="ts">
    type Color = 'orange' | 'blue' | 'transparent';
    interface Props {
        color?: Color;
        slim?: boolean;
    }

const props = withDefaults(defineProps<Props>(), {
    color: 'transparent',
    slim: false
});

const cssClasses = computed(() => {
    const colorClass = props.color;

    return {
        'base-box': true,
        'base-box--slim': props.slim,
        [`base-box--${colorClass}`]: true
    };
});
</script>

<template>
    <div class="base-box" :class="cssClasses">
        <slot />
    </div>
</template>
