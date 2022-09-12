<script setup lang="ts">
import { useSidebar } from '~/stores/sidebar';

const sidebar = useSidebar();
</script>

<template>
    <div class="content-container pt-8">
        <h1 class="h1 mb-7">
            Dashboard
        </h1>
        <div class="grid gap-6 grid-cols-1 lg:grid-cols-2">
            <div>
                <BaseBox>
                    <h2 class="h3">
                        Jouw Driver Profiel
                    </h2>
                    <p>placeholder page for Dashboard</p>
                    <p>placeholder page for Dashboard</p>
                    <p>placeholder page for Dashboard</p>
                    <p>placeholder page for Dashboard</p>
                    <button @click="sidebar.toggle()">
                        toggle sidebar
                    </button>
                    <p>placeholder page for Dashboard</p>
                    <p>placeholder page for Dashboard</p>
                    <p>
                        placeholder page
                        <BaseTag color="blue">
                            Taggie
                        </BaseTag>
                        <BaseTag color="turquoise">
                            Taggie
                        </BaseTag> for Dashboard
                    </p>
                    <p>
                        placeholder page for Dashboardfor Dashboard
                    </p>
                    <p>placeholder page for Dashboard</p>
                    <p>placeholder page for Dashboard</p>
                    <p>placeholder page for Dashboard</p>
                    <p>placeholder page for Dashboard</p>
                    <p>placeholder page for Dashboard</p>
                    <p>placeholder page for Dashboard</p>
                    <p>placeholder page for Dashboard</p>
                    <p>placeholder page for Dashboard</p>
                    <p>placeholder page for Dashboard</p>
                    <p>placeholder page for Dashboard</p>
                    <p>placeholder page for Dashboard</p>
                    <p>placeholder page for Dashboard</p>
                    <p>placeholder page for Dashboard</p>
                    <p>placeholder page for Dashboard</p>
                    <p>placeholder page for Dashboard</p>
                    <p>placeholder page for Dashboard</p>
                    <p>placeholder page for Dashboard</p>
                    <p>placeholder page for Dashboard</p>
                    <p>placeholder page for Dashboard</p>
                    <p>placeholder page for Dashboard</p>
                </BaseBox>
            </div>
            <div>
                <BaseBox color="orange" class="mb-6">
                    <p class="h3">
                        Haal het meeste uit Teamdriver en nodig je team uit.
                    </p>
                </BaseBox>

                <BaseBox color="blue">
                    <p class="h3">
                        Kom je er niet uit? <br>Vraag een expert om advies of bezoek ons kenniscentrum.
                    </p>
                    <BaseButton color="white">
                        Vraag een expert
                    </BaseButton>
                </BaseBox>
            </div>
        </div>
    </div>
</template>
