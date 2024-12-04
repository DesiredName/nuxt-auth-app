<template>
    <div>
    Dashboard - for AUTHENTICATED only
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    auth: {
        unauthenticatedOnly: false,
        navigateUnauthenticatedTo: '/login'
    }
})
</script>