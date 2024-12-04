<template>
    <div>
        Dashboard - for AUTHENTICATED only
        Hi, {{ data?.user?.name }}!
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    auth: {
        unauthenticatedOnly: false,
        navigateUnauthenticatedTo: '/login'
    }
})

const { data } = useAuth();
</script>