<template>
    <div>
        <h2>
            Login page - Guest mode (UNAUTHENTICATED ONLY)
        </h2>
        <button @click="handle_signin('google')">Google</button>
        <button @click="handle_signin('github')">GitHub</button>
        <button @click="handle_signin('linkedin')">LinkedIn</button>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    auth: {
        unauthenticatedOnly: true,
        navigateAuthenticatedTo: '/dashboard'
    }
});

const { status, signIn, signOut } = useAuth();

async function handle_signin(provider_name: 'google' | 'github' | 'linkedin') {
    await signIn(provider_name);
}
</script>