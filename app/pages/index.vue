<template>
  <div>
    <h2>
      Lading page - PUBLIC
    </h2>
    <div>
      <NuxtLink to="/login">Sign in</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  auth: false
});
</script>