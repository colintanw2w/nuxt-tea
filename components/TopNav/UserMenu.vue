<script lang="ts" setup>
const isOpen = ref(false);
const chevronClass = computed(() => {
    return isOpen.value ? 'fa-circle-chevron-up' : 'fa-circle-chevron-down';
});
</script>

<template>
    <div class="user-menu" @click="isOpen = !isOpen">
        <div class="profile-img-container">
            <img src="https://www.fillmurray.com/360/360" alt="" srcset="">
        </div>
        <font-awesome-icon :icon="['fas', chevronClass]" />
        <TopNavUserMenuDropdown v-if="isOpen" />
    </div>
</template>
