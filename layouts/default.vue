<script setup>
import { useSidebar } from "~/stores/sidebar";

const sidebar = useSidebar();

</script>


<template>
    <div :class="sidebar.isOpen ? 'sidebar-open' : ''" class="default-layout">
        <TeamsSidebar :teams="[1, 4, 5, 7, 9, 32, 53, 66, 67, 88, 89]" />
        <main>
            <TopNav />
            <slot />
        </main>
    </div>
</template>