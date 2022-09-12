<script setup lang="ts">
import { useSidebar } from '~/stores/sidebar';

const sidebar = useSidebar();
</script>

<template>
    <div class="content-container pt-8">
        <h1 class="h1 mb-7">
            Buttons example
        </h1>
        <NuxtLink to="/examples/buttons">
            Buttons example
        </NuxtLink>
        <NuxtLink to="/examples/table">
            Table example
        </NuxtLink>
    </div>
</template>
