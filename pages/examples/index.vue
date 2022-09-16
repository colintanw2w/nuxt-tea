<script setup lang="ts">
import { useSidebar } from '~/stores/sidebar';

const sidebar = useSidebar();
</script>

<template>
    <div class="content-container pt-8">
        <h1 class="h1 mb-7">
            Examples page
        </h1>
        <p>Instead of component library, for now using this page</p>
        <ul class="list-disc ml-4 my-4">
            <li>
                <NuxtLink to="/examples/buttons" class="underline hover:no-underline">
                    Buttons and cards example
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/examples/table" class="underline hover:no-underline">
                    Table example
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>
