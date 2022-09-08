<script setup lang="ts">
// import IconComponent from './my-icon.svg?component'

import TdLogo from '@/assets/svg/td_logo_diap.svg?component';

const props = defineProps<{
    user?: string
}>();

defineExpose({
    user: props.user
});
const route = useRoute();

const isActive = (name: string) => {
    return route.name === name;
};

</script>

<template>
    <nav class="top-nav">
        <div class="content-container flex-1 flex items-center">
            <NuxtLink to="dashboard">
                <TdLogo class="top-nav-logo" />
            </NuxtLink>
            <BaseButton color="transparent" to="dashboard" :aria-current="isActive('dashboard') ? 'page' : ''">
                <font-awesome-icon :icon="['fas', 'grip-vertical']" />
                Dashboard
            </BaseButton>
            <BaseButton color="transparent" to="momentopnames" :aria-current="isActive('momentopnames') ? 'page' : ''">
                <font-awesome-icon :icon="['fas', 'list-check']" />
                Momentopnames
            </BaseButton>
            <BaseButton color="transparent">
                <font-awesome-icon :icon="['fas', 'route']" />
                Actieplan
            </BaseButton>
            <BaseButton color="transparent">
                <font-awesome-icon :icon="['fas', 'circle-question']" />
                Kenniscentrum
            </BaseButton>
        </div>
    </nav>
</template>
