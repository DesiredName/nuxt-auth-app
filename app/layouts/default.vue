<template>
    <div :class="$style.main_container">
        <div>
            <nav>
                <NuxtLink to="/dashboard">Dashboard (protected route)</NuxtLink>
                <br>
                <NuxtLink to="/faq">FAQ (public)</NuxtLink>
                <br>
                <NuxtLink to="/login">Login (unauthenticated only)</NuxtLink>
            </nav>
            <hr />
            <h2>
                Your current status is <i>{{ status }}</i>
            </h2>
            <div v-if="status === 'authenticated'">
                <button @click="$event => signOut()">Sign out</button>
            </div>
        </div>
        <div style="margin-left: 4rem">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
const { status, signOut } = useAuth();
</script>

<style scoped module>
.main_container {
    display: flex;
    flex-flow: row;
    flex-wrap: nowrap;
}
</style>