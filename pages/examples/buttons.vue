<script setup lang="ts">
import { useSidebar } from '~/stores/sidebar';

const sidebar = useSidebar();
</script>

<template>
    <div class="content-container pt-8">
        <h1 class="h1 mb-7">
            Buttons example
        </h1>
        <div class="grid gap-6 grid-cols-1 lg:grid-cols-2">
            <div>
                <BaseBox>
                    <h2 class="h3">
                        Jouw Driver Profiel
                    </h2>
                    <p>placeholder page for Dashboard</p>
                    <BaseButton color="white">
                        White
                    </BaseButton>
                    <BaseButton color="orange">
                        Orange
                    </BaseButton>
                    <BaseButton color="blue">
                        Blue
                    </BaseButton>
                    <BaseButton color="orange" inverted>
                        inverted orange
                    </BaseButton>
                    <BaseButton color="blue" inverted>
                        inverted blue
                    </BaseButton>
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
                    <BaseButton color="white" inverted>
                        inverted white
                    </BaseButton>
                    <BaseButton color="white" inverted style="--btn-color: red; --btn-color-hover: purple;">
                        inverted white with custom --btn-color variable
                    </BaseButton>
                </BaseBox>
            </div>
        </div>
    </div>
</template>
