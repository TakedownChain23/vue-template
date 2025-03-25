<template>
  <VApp>
    <VMain>
      <VNavigationDrawer expand-on-hover rail>
        <VList nav density="compact">
          <VListItem prepend-icon="mdi-home" color="primary" title="Home" to="/"></VListItem>
          <VListItem prepend-icon="mdi-information" color="primary" title="Pineapples" to="/pineapples"></VListItem>
        </VList>
      </VNavigationDrawer>
      <RouterView />
    </VMain>
  </VApp>
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