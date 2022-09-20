<script setup lang="ts">
import "~/assets/main.css"
</script>

<template>
  <div>
    <!-- the meta tag is provided, and viewport is set by Nuxt by default -->
    <Link ref="icon" href="/favicon.ico" />
    <Meta name="description" content="Nuxt3 Hello" />
    <Title>Nuxt3 - Hello</Title>
    <TheNav />
    <NuxtPage />
    <!-- NuxtWelcome titl="Hello Nuxt3!" :version="version" / -->
  </div>
</template>