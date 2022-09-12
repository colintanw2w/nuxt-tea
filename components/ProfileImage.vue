<script lang="ts" setup>
import { defineProps } from 'vue';
const props = defineProps({
    url: { type: String, required: true }
});

</script>
<template>
    <div class="profile-img">
        <img :src="props.url" :alt="$attrs.alt ? ($attrs.alt as string) : 'profile image'">
    </div>
</template>
