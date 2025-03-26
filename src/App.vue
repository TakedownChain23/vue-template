<template>
  <v-app>
    <v-main>
      <v-navigation-drawer expand-on-hover rail>
        <v-list nav density="compact">
          <v-list-item prepend-icon="mdi-home" color="primary" title="Home" to="/"></v-list-item>
          <VListItem prepend-icon="mdi-information" color="primary" title="Pineapples" to="/pineapples"></VListItem>
        </v-list>
      </v-navigation-drawer>
      <RouterView />
    </v-main>
  </v-app>
</template>

<style>
:root {
  font-family: Arial, Helvetica, sans-serif;
  font-size: large;
}

.v-container {
  display: flex;
  flex-direction: column;
}

.heading {
  text-align: center;
}
</style>