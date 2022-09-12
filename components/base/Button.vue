<script setup lang="ts">

type Color = 'orange' | 'blue' | 'white' | 'transparent';
interface Props {
    color?: Color;
    full?: boolean;
    variant?: 'button' | 'link';
    to?: string;
    inverted?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    color: 'blue',
    full: false,
    variant: 'button',
    to: null,
    inverted: false
});

const cssClasses = computed(() => {
    const colorClass = props.color ? 'btn-' + props.color : '';
    const widthClass = props.full ? 'w-full' : '';
    const invertedClass = props.inverted ? 'btn-inverted' : '';
    return colorClass + ' ' + widthClass + '' + invertedClass;
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
