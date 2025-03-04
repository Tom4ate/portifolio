<template>
  <v-app>
    <v-app-bar :elevation="2" color="black">
      <template v-slot:prepend>
        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      </template>

      <v-app-bar-title class="text-primary text-weight-bold">Lucas Rodrigues</v-app-bar-title>

      <template v-slot:append>
        <v-btn variant="text" color="primary" >home</v-btn>
        <v-btn variant="text" color="primary" >about</v-btn>
        <v-btn variant="text" color="primary" >projects</v-btn>
        <v-btn variant="text" color="primary" >contact</v-btn>
      </template>
    </v-app-bar>
    <v-main>
      <slot />
    </v-main>

    <!-- <AppFooter /> -->
  </v-app>
</template>
