<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core';

const el = ref();
const isOpen = ref(false);
const chevronClass = computed(() => {
    return isOpen.value ? 'fa-circle-chevron-up' : 'fa-circle-chevron-down';
});

onClickOutside(el, () => { isOpen.value = false; });
</script>

<template>
    <div ref="el" class="user-menu" @click="isOpen = !isOpen">
        <ProfileImage url="https://www.fillmurray.com/360/360" />
        <div class="user-menu__name">
            BillyalololoMoao
        </div>
        <font-awesome-icon :icon="['fas', chevronClass]" alt="profile image" />
        <TopNavUserMenuDropdown v-if="isOpen" />
    </div>
</template>
