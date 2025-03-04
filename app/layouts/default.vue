<script lang="ts" setup>
</script>

<template>
  <v-app>
    <v-app-bar :elevation="2" color="black">
      <template v-slot:prepend>
        <CustomSVG name="logo-simple" color="primary" size="150px" class="mx-n5 mt-2" ></CustomSVG>
        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      </template>

      <!-- <v-app-bar-title class="text-primary text-weight-bold">
        {{ $t('test') }}
      </v-app-bar-title> -->

      <template v-slot:append>
        <v-btn variant="text" color="primary" >{{ $t('menu.home') }}</v-btn>
        <v-btn variant="text" color="primary" >{{ $t('menu.about') }}</v-btn>
        <v-btn variant="text" color="primary" >{{ $t('menu.projects') }}</v-btn>
        <v-btn variant="text" color="primary" >{{ $t('menu.contact') }}</v-btn>
      </template>
    </v-app-bar>  
    <v-main>
      <slot />
    </v-main>

    <!-- <AppFooter /> -->
  </v-app>
</template>
