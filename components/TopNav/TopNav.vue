<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import TdLogoLarge from '@/assets/svg/td_logo_diap.svg?component';
import TdLogoSmall from '@/assets/svg/td_logomark.svg?component';

const props = defineProps<{
    user?: string
}>();

const el = ref();
const isOpen = ref(false);

onClickOutside(el, () => { isOpen.value = false; });

defineExpose({
    user: props.user
});
</script>

<template>
    <nav class="top-nav">
        <div class="content-container flex-1 flex items-center">
            <NuxtLink to="dashboard" class="top-nav__logo">
                <TdLogoSmall class="top-nav__svg top-nav__svg--sm" />
                <TdLogoLarge class="top-nav__svg top-nav__svg--lg" />
            </NuxtLink>

            <TopNavItems class="default-menu" />

            <BaseButton color="transparent" to="/dashboard" class="top-nav__btn-upgrade">
                Upgrade
            </BaseButton>

            <TopNavUserMenu />

            <div ref="el" class="mobile-menu">
                <BaseButton color="transparent" @click="isOpen = !isOpen">
                    <font-awesome-icon :icon="['fas', 'bars']" />
                </BaseButton>
                <TopNavItems v-if="isOpen" class="mobile-menu__items" />
            </div>
        </div>
    </nav>
</template>
