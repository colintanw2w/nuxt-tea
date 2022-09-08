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
        <div class="profile-img-container">
            <img src="https://www.fillmurray.com/360/360" alt="" srcset="">
        </div>
        <font-awesome-icon :icon="['fas', chevronClass]" />
        <TopNavUserMenuDropdown v-if="isOpen" />
    </div>
</template>
