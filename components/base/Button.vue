<script setup lang="ts">

type Color = 'orange' | 'blue' | 'transparent';
interface Props {
    color?: Color;
    full?: boolean;
    variant?: 'button' | 'link';
    to?: string;
}

const props = withDefaults(defineProps<Props>(), {
    color: 'orange',
    full: false,
    variant: 'button',
    to: null
});

const cssClasses = computed(() => {
    const colorClass = 'btn-' + props.color;
    const widthClass = props.full ? 'w-full' : '';
    return colorClass + ' ' + widthClass;
});
</script>

<template>
    <button v-if="!props.to" v-bind="$attrs" class="btn" :class="cssClasses" type="button">
        <slot />
    </button>
    <NuxtLink v-else v-bind="$attrs" :to="props.to" class="btn" :class="cssClasses">
        <slot />
    </NuxtLink>
</template>
