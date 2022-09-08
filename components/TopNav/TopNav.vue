<script setup lang="ts">
// import IconComponent from './my-icon.svg?component'

import TdLogoLarge from '@/assets/svg/td_logo_diap.svg?component';
import TdLogoSmall from '@/assets/svg/td_logomark.svg?component';

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
                <TdLogoSmall class="top-nav-logo logo-sm" />
                <TdLogoLarge class="top-nav-logo logo-lg" />
            </NuxtLink>
            <div class="default-menu">
                <BaseButton color="transparent" to="dashboard" class="nav-link">
                    <font-awesome-icon :icon="['fas', 'grip-vertical']" />
                    <span>Dashboard</span>
                </BaseButton>
                <BaseButton color="transparent" to="momentopnames" class="nav-link">
                    <font-awesome-icon :icon="['fas', 'list-check']" />
                    <span>Momentopnames</span>
                </BaseButton>
                <BaseButton color="transparent" class="nav-link">
                    <font-awesome-icon :icon="['fas', 'route']" />
                    <span>Actieplan</span>
                </BaseButton>
                <BaseButton color="transparent" class="nav-link">
                    <font-awesome-icon :icon="['fas', 'circle-question']" />
                    <span>Kenniscentrum</span>
                </BaseButton>
                <BaseButton color="transparent" to="dashboard" class=" btn-upgrade">
                    Upgrade
                </BaseButton>

                <div class="user-menu">
                    <div class="profile-img-container">
                        <img src="" alt="">
                    </div>
                    <font-awesome-icon :icon="['fas', 'fa-circle-chevron-down']" />
                </div>
            </div>
            <div class="mobile-menu">
                <BaseButton color="transparent">
                    <font-awesome-icon :icon="['fas', 'bars']" />
                </BaseButton>
            </div>
        </div>
    </nav>
</template>
